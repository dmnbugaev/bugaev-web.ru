// server/api/leads.get.ts — диагностика конфигурации
export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)

  const token = config.telegramBotToken
    || process.env.NUXT_TELEGRAM_BOT_TOKEN
    || process.env.TELEGRAM_BOT_TOKEN

  const chatId = config.telegramChatId
    || process.env.NUXT_TELEGRAM_CHAT_ID
    || process.env.TELEGRAM_CHAT_ID

  return {
    ok: !!(token && chatId),
    token: typeof token === 'string' && token ? `${token.slice(0, 10)}...` : null,
    chatId: chatId || null,
    message: (token && chatId)
      ? 'Конфигурация в порядке. Форма готова к работе.'
      : 'Токен или chat_id не найдены. Проверьте .env и перезапустите npm run dev.',
  }
})
