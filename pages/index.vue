<template>
  <div class="min-h-screen" style="background: var(--surface);">
    <Header />
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <ForWho />
      <Pricing />
      <Advantages />
      <Testimonials />
      <FAQ />
      <LeadForm />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Bugaev Web — IT-отдел + SMM для салонов красоты за 50 000 ₽/мес',
  meta: [
    {
      name: 'description',
      content:
        'Полный цифровой пакет для салона красоты: сайт на Nuxt.js, Telegram-бот, ведение соцсетей, настройка CRM YCLIENTS, аналитика и личный менеджер — всё за 50 000 ₽ в месяц.',
    },
    { property: 'og:title', content: 'Bugaev Web — IT-отдел + SMM для салонов красоты' },
    {
      property: 'og:description',
      content: 'Сайт, Telegram-бот, соцсети, CRM YCLIENTS и аналитика под ключ за 50 000 ₽/мес',
    },
    { property: 'og:type',   content: 'website' },
    { property: 'og:locale', content: 'ru_RU' },
    { name: 'twitter:card',  content: 'summary_large_image' },
    { name: 'theme-color',   content: '#ffffff' },
  ],
})
</script>
