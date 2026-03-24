// server/api/leads.post.ts
// Receives lead form submissions and forwards them to Telegram.
//
// Required environment variables (.env):
//   TELEGRAM_BOT_TOKEN  — токен бота от @BotFather
//   TELEGRAM_CHAT_ID    — ID чата/канала для уведомлений (можно получить через @userinfobot)

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Telegram not configured. Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env',
    })
  }

  const utmLine = body.utm_source
    ? `\n📊 UTM: ${body.utm_source}/${body.utm_medium || '—'}/${body.utm_campaign || '—'}`
    : ''

  const text = [
    '🎯 <b>Новая заявка с сайта!</b>',
    '',
    `👤 <b>Имя:</b> ${body.name}`,
    `📞 <b>Телефон:</b> ${body.phone}`,
    `✉️ <b>Email:</b> ${body.email}`,
    `💇 <b>Салон:</b> ${body.salon || '—'}`,
    '',
    `📍 <b>Источник:</b> ${body.page_url}`,
    `🕐 <b>Время:</b> ${new Date(body.submitted_at).toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}`,
    utmLine,
  ]
    .filter((line) => line !== '')
    .join('\n')

  const tgResponse = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'HTML',
      }),
    }
  )

  if (!tgResponse.ok) {
    const err = await tgResponse.json().catch(() => ({}))
    throw createError({
      statusCode: 502,
      statusMessage: `Telegram API error: ${JSON.stringify(err)}`,
    })
  }

  return { ok: true }
})
