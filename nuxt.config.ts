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
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
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
