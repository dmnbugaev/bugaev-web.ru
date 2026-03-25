// server/api/make-webhook.post.ts — серверный прокси для Make.com (fire-and-forget)
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const webhookUrl = config.makeWebhookUrl as string | undefined

  if (!webhookUrl) return { ok: false, reason: 'no webhook url configured' }

  const body = await readBody(event).catch(() => ({}))

  // Отправляем и логируем ответ Make.com для диагностики
  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    const text = await res.text()
    console.log(`[make-webhook] status=${res.status} body=${text}`)
  } catch (err) {
    console.error('[make-webhook] fetch error:', err)
  }

  return { ok: true }
})
