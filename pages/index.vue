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
    { property: 'og:title',       content: 'Bugaev Web — IT-отдел + SMM для салонов красоты' },
    { property: 'og:description', content: 'Сайт, Telegram-бот, соцсети, CRM YCLIENTS и аналитика под ключ за 50 000 ₽/мес' },
    { property: 'og:type',        content: 'website' },
    { property: 'og:locale',      content: 'ru_RU' },
    { property: 'og:url',         content: 'https://bugaev-web.ru/' },
    { name: 'twitter:card',       content: 'summary_large_image' },
    { name: 'theme-color',        content: '#ffffff' },
  ],
  link: [
    { rel: 'canonical', href: 'https://bugaev-web.ru/' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Bugaev Web',
        description: 'IT-отдел + SMM под ключ для салонов красоты и beauty-клиник за 50 000 ₽/мес',
        url: 'https://bugaev-web.ru',
        telephone: '+79964145143',
        email: 'dmnbugaev@gmail.com',
        priceRange: '50000₽/месяц',
        areaServed: 'Москва и Московская область',
        openingHours: 'Mo-Sa 09:00-21:00',
        sameAs: [
          'https://t.me/bugaev_web',
          'https://instagram.com/bugaev_web',
          'https://vk.com/bugaev_web',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          telephone: '+79964145143',
          availableLanguage: 'Russian',
        },
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'А если у нас уже есть Instagram?',
            acceptedAnswer: { '@type': 'Answer', text: 'Отлично — начнём с аудита того, что есть. Доработаем оформление, выстроим контент-план и улучшим вовлечённость. Ничего не удаляем, всё только улучшаем.' },
          },
          {
            '@type': 'Question',
            name: 'А если у нас нет нормальных фото?',
            acceptedAnswer: { '@type': 'Answer', text: 'Не проблема. Мы помогаем с ТЗ на съёмку, используем правильно обработанные фото работ и качественный сток. Ваше участие — изредка присылать фото новых работ. 10–15 минут в неделю.' },
          },
          {
            '@type': 'Question',
            name: 'А если мы находимся не в центре Москвы?',
            acceptedAnswer: { '@type': 'Answer', text: 'Большинство наших клиентов — салоны в спальных районах Москвы и Подмосковье: Митино, Бутово, Люблино, Химки, Подольск. Для таких локаций SEO и геопривязка работают особенно хорошо — конкуренция ниже, а запросы типичные.' },
          },
          {
            '@type': 'Question',
            name: 'А если мы захотим уйти?',
            acceptedAnswer: { '@type': 'Answer', text: 'Без штрафов. Уведомите за 14 дней — и договор закрыт. Сайт, бот, база клиентов и весь контент остаются у вас. Мы не держим данные в заложниках.' },
          },
          {
            '@type': 'Question',
            name: 'Как быстро будут результаты?',
            acceptedAnswer: { '@type': 'Answer', text: 'Первые записи через бот и сайт — в течение 2–4 недель после запуска. Рост в соцсетях и SEO-трафик становятся заметны через 1–3 месяца. Точные прогнозы даём после бесплатного аудита.' },
          },
          {
            '@type': 'Question',
            name: 'Насколько это безопасно с точки зрения данных клиентов?',
            acceptedAnswer: { '@type': 'Answer', text: 'Работаем строго в рамках 152-ФЗ о персональных данных. Доступ к CRM и базе — только у вас и вашего личного менеджера. NDA подписываем до начала работ. Данные клиентов никуда не передаются.' },
          },
          {
            '@type': 'Question',
            name: 'Что конкретно входит в подписку и нет ли скрытых платежей?',
            acceptedAnswer: { '@type': 'Answer', text: 'В подписку за 50 000 ₽/мес входит: сайт-визитка на Nuxt.js, Telegram-бот с автозаписью и напоминаниями, ведение Instagram и Telegram-канала, настройка CRM YCLIENTS, еженедельные отчёты, личный менеджер 6 дней в неделю, хостинг и домен. Скрытых доплат нет.' },
          },
        ],
      }),
    },
  ],
})
</script>
