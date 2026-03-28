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

  // ── Pre-render статических страниц при билде (HTML отдаётся мгновенно) ──
  routeRules: {
    '/':                    { prerender: true },
    '/privacy':             { prerender: true },
    '/cookies':             { prerender: true },
    '/oferta':              { prerender: true },
    '/terms':               { prerender: true },
    '/requisites':          { prerender: true },
    '/smm-salon-krasoty':   { prerender: true },
    '/sait-salon-krasoty':  { prerender: true },
    '/telegram-bot-zapis':  { prerender: true },
    '/crm-yclients':        { prerender: true },
    '/nogtevaiya-studiya':  { prerender: true },
    '/kosmetolog':          { prerender: true },
    '/barbershop':          { prerender: true },
    '/uslugi':              { prerender: true },
    '/blog':                { prerender: true },
    '/blog/**':             { prerender: true },
    '/sitemap.xml':         { prerender: true },
    // Иммутабельный кэш для хешированных ассетов Nuxt (JS/CSS бандлы)
    '/_nuxt/**': {
      headers: { 'cache-control': 'public, max-age=31536000, immutable' },
    },
    // Кэш статики (шрифты, иконки, изображения)
    '/fonts/**': {
      headers: { 'cache-control': 'public, max-age=31536000, immutable' },
    },
  },

  // ── Nitro: сжатие и оптимизация отдачи ──────────────────────────────────
  nitro: {
    compressPublicAssets: { gzip: true, brotli: true },
    minify: true,
  },

  // ── Vite: оптимизация бандла ─────────────────────────────────────────────
  vite: {
    build: {
      cssMinify: true,
      rollupOptions: {
        output: {
          // Выделяем тяжёлые зависимости в отдельный чанк
          manualChunks(id) {
            if (id.includes('node_modules')) return 'vendor'
          },
        },
      },
    },
    optimizeDeps: {
      include: ['vue', 'vue-router'],
    },
  },

  components: [{ path: '~/components', pathPrefix: false }],

  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/content'],

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
          content: 'Бугаев Веб (Бугаев Дмитрий) — комплексное digital-продвижение для салонов красоты, ногтевых студий, косметологических клиник и бьюти-мастеров в Москве. Сайт на Nuxt.js, Telegram-бот для онлайн-записи, ведение Instagram и Telegram-канала, настройка CRM YCLIENTS — всё за 50 000 ₽/мес. Результат с первого месяца. Без скрытых платежей.'
        },
        // OG Image — используется при шеринге в соцсетях и мессенджерах
        { property: 'og:image',        content: 'https://bugaev-web.ru/og-image.jpg' },
        { property: 'og:image:type',   content: 'image/jpeg' },
        { property: 'og:image:width',  content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt',    content: 'Бугаев Веб — Digital-абонемент для салона красоты' },
        { name: 'twitter:image',       content: 'https://bugaev-web.ru/og-image.jpg' },
        { name: 'twitter:image:alt',   content: 'Бугаев Веб — Digital-абонемент для салона красоты' },
        {
          name: 'keywords',
          content: 'SMM для салона красоты, продвижение салона красоты, маркетинг для салона красоты, реклама салона красоты, как привлечь клиентов в салон красоты, как увеличить выручку салона красоты, как раскрутить салон красоты с нуля, как сделать салон красоты прибыльным, как не терять клиентов в салоне красоты, как увеличить запись в салоне красоты, SMM для салона красоты Москва, продвижение салона красоты Москва, ведение Instagram салона красоты, ведение Telegram канала салона красоты, контент план для салона красоты, посты для салона красоты, SMM специалист для салона красоты, удалённый SMM менеджер для салона, сколько стоит SMM для салона красоты, разработка сайта для салона красоты, сайт для салона красоты Москва, сайт для салона красоты под ключ, сколько стоит сайт для салона красоты, создать сайт для салона красоты, сайт визитка для салона красоты, Telegram бот для салона красоты, бот для онлайн записи клиентов, онлайн запись для салона красоты, автоматическая запись клиентов салон красоты, как сделать онлайн запись для салона, CRM для салона красоты, YCLIENTS настройка, настройка YCLIENTS для салона красоты, CRM YCLIENTS Москва, продвижение ногтевой студии, SMM для ногтевой студии, реклама ногтевой студии, сайт для ногтевой студии, как привлечь клиентов в ногтевую студию, SMM для косметолога, продвижение косметолога, реклама косметологического кабинета, сайт для косметолога, маркетинг для косметолога, как привлечь клиентов косметологу, SMM для бровиста, продвижение бровиста в Instagram, реклама бrow bar, сайт для бrow bar, SMM для лэшмейкера, продвижение мастера наращивания ресниц, маркетинг для мастера маникюра, продвижение мастера маникюра, сайт для мастера маникюра, SMM для стоматологии, продвижение стоматологической клиники, маркетинг для стоматологии, digital абонемент для салона красоты, комплексный маркетинг для салона красоты, маркетинг под ключ для салона красоты, как открыть салон красоты с нуля, как открыть ногтевую студию, бизнес план салона красоты, сколько денег нужно на открытие салона красоты, как сделать салон красоты популярным, как вести соцсети салону красоты, как вести Instagram для салона красоты, как вести Telegram для салона красоты, Бугаев Веб, Bugaev Web, Бугаев Дмитрий, dmnbugaev'
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
        // Шрифты самохостятся через @nuxt/fonts — внешние preconnect не нужны
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
