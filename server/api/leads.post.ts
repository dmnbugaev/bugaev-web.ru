// server/api/leads.post.ts
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)

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

  const utmLine = body.utm_source
    ? `UTM: ${body.utm_source} / ${body.utm_medium || '—'} / ${body.utm_campaign || '—'}`
    : ''

  const html = `
    <h2 style="color:#1a1a1a">🎯 Новая заявка с сайта!</h2>
    <table style="border-collapse:collapse;width:100%;max-width:500px">
      <tr><td style="padding:8px;color:#666;width:120px">Имя</td><td style="padding:8px;font-weight:600">${body.name || '—'}</td></tr>
      <tr style="background:#f9f9f9"><td style="padding:8px;color:#666">Телефон</td><td style="padding:8px;font-weight:600">${body.phone || '—'}</td></tr>
      <tr><td style="padding:8px;color:#666">Email</td><td style="padding:8px;font-weight:600">${body.email || '—'}</td></tr>
      <tr style="background:#f9f9f9"><td style="padding:8px;color:#666">Салон</td><td style="padding:8px">${body.salon || '—'}</td></tr>
      <tr><td style="padding:8px;color:#666">Страница</td><td style="padding:8px"><a href="${body.page_url || ''}">${body.page_url || '—'}</a></td></tr>
      ${utmLine ? `<tr style="background:#f9f9f9"><td style="padding:8px;color:#666">UTM</td><td style="padding:8px;color:#888">${utmLine}</td></tr>` : ''}
    </table>
  `

  const transporter = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: { user: smtpUser, pass: smtpPass },
  })

  try {
    await transporter.sendMail({
      from: `"Bugaev Web" <${smtpUser}>`,
      to: smtpTo,
      subject: `Новая заявка: ${body.name || '—'} (${body.phone || '—'})`,
      html,
    })
    console.log(`[leads] Email отправлен на ${smtpTo}`)
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('[leads] Email error:', msg)
    throw createError({ statusCode: 502, statusMessage: `Ошибка отправки email: ${msg}` })
  }

  return { ok: true }
})
