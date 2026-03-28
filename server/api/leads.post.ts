import nodemailer from 'nodemailer'
import { validatePhone, validateEmail } from '../../utils/validation'

// ── Rate limiting (in-memory): max 3 requests per IP per 60s ────────────────
const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT   = 3
const RATE_WINDOW  = 60_000

function checkRateLimit(ip: string): boolean {
  const now     = Date.now()
  const history = (rateLimitMap.get(ip) ?? []).filter(t => now - t < RATE_WINDOW)
  if (history.length >= RATE_LIMIT) return false
  history.push(now)
  rateLimitMap.set(ip, history)
  return true
}

// ── HTML escaping — prevents XSS in email body ───────────────────────────────
function esc(value: unknown): string {
  return String(value ?? '—')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

// ── Handler ───────────────────────────────────────────────────────────────────
export default defineEventHandler(async (event) => {
  // Rate limit by IP
  const ip = getRequestIP(event, { xForwardedFor: true }) ?? 'unknown'
  if (!checkRateLimit(ip)) {
    throw createError({ statusCode: 429, statusMessage: 'Слишком много запросов. Попробуйте через минуту.' })
  }

  const config   = useRuntimeConfig(event)
  const smtpUser = config.smtpUser as string
  const smtpPass = config.smtpPass as string
  const smtpTo   = config.smtpTo   as string

  if (!smtpUser || !smtpPass || !smtpTo) {
    throw createError({ statusCode: 500, statusMessage: 'Email не настроен. Добавьте NUXT_SMTP_USER, NUXT_SMTP_PASS, NUXT_SMTP_TO в .env' })
  }

  let body: Record<string, string>
  try {
    body = await readBody(event)
  } catch {
    throw createError({ statusCode: 400, statusMessage: 'Неверный формат данных' })
  }

  // Server-side validation (mirrors client-side)
  const name  = (body.name  ?? '').trim()
  const phone = (body.phone ?? '').trim()
  const email = (body.email ?? '').trim().toLowerCase()
  const salon = (body.salon ?? '').trim()

  if (name.length < 2 || name.length > 100) {
    throw createError({ statusCode: 400, statusMessage: 'Некорректное имя (2–100 символов)' })
  }
  if (!validatePhone(phone)) {
    throw createError({ statusCode: 400, statusMessage: 'Некорректный номер телефона' })
  }
  if (!validateEmail(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Некорректный email' })
  }

  // Honeypot: silently reject bots
  if (body._gotcha?.trim()) return { ok: true }

  const utmParts = [body.utm_source, body.utm_medium, body.utm_campaign].filter(Boolean)
  const utmRow   = utmParts.length
    ? `<tr style="background:#fafafa"><td style="padding:10px 12px;color:#666;border-bottom:1px solid #eee;">UTM</td><td style="padding:10px 12px;color:#888;border-bottom:1px solid #eee;">${esc(utmParts.join(' / '))}</td></tr>`
    : ''

  // Only allow safe http/https URLs to prevent javascript: href injection in email
  const rawPageUrl = String(body.page_url ?? '')
  const safePageUrl = /^https?:\/\//.test(rawPageUrl) ? rawPageUrl : ''
  const pageUrl = esc(safePageUrl)

  const html = `
    <h2 style="color:#1a1a1a;font-family:Arial,sans-serif;margin-bottom:16px;">🎯 Новая заявка — Bugaev Web</h2>
    <table style="border-collapse:collapse;width:100%;max-width:520px;font-family:Arial,sans-serif;font-size:14px;">
      <tr>
        <td style="padding:10px 12px;color:#666;width:130px;border-bottom:1px solid #eee;">Имя</td>
        <td style="padding:10px 12px;font-weight:600;border-bottom:1px solid #eee;">${esc(name)}</td>
      </tr>
      <tr style="background:#fafafa">
        <td style="padding:10px 12px;color:#666;border-bottom:1px solid #eee;">Телефон</td>
        <td style="padding:10px 12px;font-weight:600;border-bottom:1px solid #eee;">${esc(phone)}</td>
      </tr>
      <tr>
        <td style="padding:10px 12px;color:#666;border-bottom:1px solid #eee;">Email</td>
        <td style="padding:10px 12px;font-weight:600;border-bottom:1px solid #eee;">${esc(email)}</td>
      </tr>
      <tr style="background:#fafafa">
        <td style="padding:10px 12px;color:#666;border-bottom:1px solid #eee;">Салон</td>
        <td style="padding:10px 12px;border-bottom:1px solid #eee;">${esc(salon) || '—'}</td>
      </tr>
      <tr>
        <td style="padding:10px 12px;color:#666;border-bottom:1px solid #eee;">Страница</td>
        <td style="padding:10px 12px;border-bottom:1px solid #eee;">
          ${pageUrl ? `<a href="${pageUrl}" style="color:#8FAF8A;">${pageUrl}</a>` : '—'}
        </td>
      </tr>
      ${utmRow}
    </table>
    <p style="margin-top:16px;color:#bbb;font-family:Arial,sans-serif;font-size:12px;">
      ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })} МСК
    </p>
  `

  const transporter = nodemailer.createTransport({
    host:   'smtp.yandex.ru',
    port:   465,
    secure: true,
    auth:   { user: smtpUser, pass: smtpPass },
  })

  try {
    await transporter.sendMail({
      from:    `"Bugaev Web" <${smtpUser}>`,
      to:      smtpTo,
      subject: `Новая заявка: ${name} · ${phone}`,
      html,
    })
    console.log(`[leads] Заявка: ${email} · IP: ${ip}`)
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('[leads] Ошибка отправки:', msg)
    throw createError({ statusCode: 502, statusMessage: 'Ошибка отправки. Напишите нам напрямую в Telegram.' })
  }

  return { ok: true }
})
