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
    <section aria-label="О сервисе Бугаев Веб" style="font-size:13px;color:#999;margin-top:60px;padding:0 20px;">
      <h2>Бугаев Веб — digital-продвижение для салонов красоты и клиник</h2>
      <p>
        Бугаев Веб (основатель — Бугаев Дмитрий) — комплексный сервис
        digital-продвижения для владельцев салонов красоты, косметологических кабинетов,
        ногтевых студий и бьюти-клиник в Москве. Помогаем салонам красоты
        зарабатывать больше, выстраивая полную систему привлечения клиентов
        под ключ за одну ежемесячную подписку.
      </p>
      <p>
        Многие владельцы задаются вопросом: как салону красоты начать зарабатывать
        больше и как привлечь новых клиентов? Ответ — выстроенное digital-присутствие:
        профессиональный сайт, активные соцсети и автоматизированная запись.
        Именно это предоставляет Бугаев Веб в рамках единого абонемента.
      </p>
      <p>
        Разработка сайта для салона красоты в Москве, ведение Instagram
        и Telegram-канала, создание Telegram-бота для онлайн-записи клиентов,
        настройка CRM YCLIENTS — всё входит в один пакет 50 000 ₽/мес без скрытых доплат.
      </p>
      <address>
        Написать Бугаеву Дмитрию напрямую:
        Telegram —
        <a href="https://t.me/bugggd" rel="noopener noreferrer">@bugggd</a>,
        Instagram —
        <a href="https://instagram.com/dmnbugaev_" rel="noopener noreferrer">@dmnbugaev_</a>
      </address>
    </section>
    <SeoSchema />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Бугаев Веб — Сайт, SMM и Telegram-бот для салона красоты в Москве | от 50 000 ₽/мес',
  description: 'Бугаев Веб (Бугаев Дмитрий) — помогаем салонам красоты и клиникам в Москве зарабатывать больше. Сайт, Telegram-бот, ведение Instagram и Telegram, настройка CRM — 50 000 ₽/мес.',
  ogTitle: 'Бугаев Веб — Digital-абонемент для салона красоты | 50 000 ₽/мес',
  ogDescription: 'Помогаем салонам красоты зарабатывать больше. Сайт, бот, соцсети, CRM под ключ от Бугаев Веб.',
  ogUrl: 'https://bugaev-web.ru/',
  ogType: 'website',
  ogLocale: 'ru_RU',
  ogSiteName: 'Бугаев Веб',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Бугаев Веб — Digital-абонемент для салона красоты',
  twitterDescription: 'Сайт + Telegram-бот + SMM + CRM для салона красоты в Москве от Бугаев Веб.'
})

useHead({
  htmlAttrs: { lang: 'ru' },
  link: [{ rel: 'canonical', href: 'https://bugaev-web.ru/' }]
})
</script>
