// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV !== 'production' },

  runtimeConfig: {
    // Серверные переменные (не утекают в браузер)
    // Переопределяются через NUXT_SMTP_* в .env
    smtpUser: '',
    smtpPass: '',
    smtpTo:   '',
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts'],

  fonts: {
    families: [
      { name: 'Syne',      provider: 'google', weights: [400, 500, 600, 700, 800] },
      { name: 'Syne Mono', provider: 'google', weights: [400] },
    ],
    defaults: {
      preload: true,
    },
  },

  css: ['~/assets/css/tailwind.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Бугаев Веб — Сайт, SMM и Telegram-бот для салона красоты в Москве | от 50 000 ₽/мес',
      meta: [
        {
          name: 'description',
          content: 'Бугаев Веб (Бугаев Дмитрий) — помогаем салонам красоты и клиникам в Москве зарабатывать больше. Разработка сайта, ведение Instagram и Telegram, бот для записи клиентов, настройка CRM YCLIENTS — всё за 50 000 ₽/мес. Без скрытых платежей, результат с первого месяца.'
        },
        {
          name: 'keywords',
          content: 'как салону красоты начать больше зарабатывать, как увеличить прибыль салона красоты, как привлечь клиентов в салон красоты, как открыть салон красоты, сколько денег нужно на открытие салона красоты, разработка сайта для салона красоты, сайт для салона красоты Москва, сайт для салона красоты под ключ, как вести соцсети салону красоты, ведение Instagram салона красоты, ведение Telegram канала салона красоты, SMM для салона красоты Москва, SMM для косметологии, продвижение салона красоты в соцсетях, Telegram бот для записи клиентов, бот для салона красоты, CRM для салона красоты, YCLIENTS настройка, digital маркетинг для салона красоты, абонемент SMM салон красоты, удалённый SMM менеджер для салона, автоматическая запись клиентов, как не терять клиентов салону красоты, как сделать салон красоты популярным, маркетинг для косметолога, продвижение косметолога в Instagram, продвижение ногтевой студии, реклама салона красоты, Бугаев Веб, Bugaev Web, Бугаев Дмитрий'
        },
        { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
        { name: 'author', content: 'Бугаев Дмитрий — Бугаев Веб' },
        { name: 'theme-color', content: '#1a1a1a' },
        { name: 'geo.region', content: 'RU-MOW' },
        { name: 'geo.placename', content: 'Москва' },
        { name: 'geo.position', content: '55.7558;37.6173' },
        { name: 'ICBM', content: '55.7558, 37.6173' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://bugaev-web.ru/' },
        { property: 'og:title', content: 'Бугаев Веб — Сайт, SMM и Telegram-бот для салона красоты | 50 000 ₽/мес' },
        { property: 'og:description', content: 'Помогаем салонам красоты и клиникам в Москве зарабатывать больше. Сайт, бот для записи, ведение соцсетей, CRM — под ключ за одну подписку от Бугаев Веб.' },
        { property: 'og:locale', content: 'ru_RU' },
        { property: 'og:site_name', content: 'Бугаев Веб' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Бугаев Веб — Digital-абонемент для салона красоты — 50 000 ₽/мес' },
        { name: 'twitter:description', content: 'Сайт + Telegram-бот + SMM + CRM для салона красоты в Москве. Один подрядчик. Один платёж. Бугаев Дмитрий.' }
      ],
      link: [
        { rel: 'canonical', href: 'https://bugaev-web.ru/' },
        { rel: 'sitemap', type: 'application/xml', href: '/sitemap.xml' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' }
      ]
    },
  },

  tailwindcss: {
    configPath: '~/tailwind.config.js',
  },

  typescript: {
    strict: true,
    shim: false,
  },

  compatibilityDate: '2024-04-03',
})
