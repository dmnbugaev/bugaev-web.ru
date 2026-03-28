<template>
  <div style="background: var(--surface);">
    <Header />
    <main class="pt-28 pb-20">
      <div class="section-container">

        <!-- Breadcrumbs -->
        <nav aria-label="Хлебные крошки" style="margin-bottom: 32px; font-size: 0.8rem; color: var(--ink-3); display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
          <NuxtLink to="/" style="color: var(--ink-3); text-decoration: none;">Главная</NuxtLink>
          <span>→</span>
          <NuxtLink to="/uslugi" style="color: var(--ink-3); text-decoration: none;">Услуги</NuxtLink>
          <span>→</span>
          <span style="color: var(--ink);">Сайт для салона красоты</span>
        </nav>

        <!-- Заголовок -->
        <div class="mb-16">
          <span class="badge mb-5">Разработка сайта</span>
          <h1 class="section-title mb-5">Сайт для салона<br><span style="color: var(--accent);">красоты</span> под ключ</h1>
          <p class="section-subtitle max-w-2xl mb-8">
            Быстрый SEO-оптимизированный сайт-визитка для салона красоты на Nuxt.js: прайс-лист,
            портфолио работ, форма онлайн-записи, адаптация под смартфоны. Входит в абонемент <strong>50 000 ₽/мес</strong>.
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="#contact" class="btn-primary">Заказать сайт</a>
            <NuxtLink to="/" class="btn-outline">← На главную</NuxtLink>
          </div>
        </div>

        <div class="h-px mb-16" style="background: var(--border);" />

        <!-- Что входит -->
        <section class="mb-20" aria-label="Что входит в сайт для салона красоты">
          <h2 class="section-title mb-3" style="font-size: clamp(1.5rem, 3vw, 2.5rem);">Что входит в сайт для салона красоты</h2>
          <p class="section-subtitle mb-10 max-w-xl">Полноценный сайт, который находят в Google и Яндексе и который превращает визиты в записи.</p>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">🎨</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Профессиональный дизайн</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Современный дизайн под ваш брендинг. Адаптация под все устройства — телефон, планшет, ПК.</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">💰</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Прайс-лист услуг</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Структурированный прайс с ценами. Клиент видит стоимость до звонка — меньше "а сколько стоит?"</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">🖼️</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Портфолио работ</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Галерея фото до/после, работы мастеров. Потенциальный клиент видит качество и принимает решение.</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">📝</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Форма онлайн-записи</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Форма записи прямо на сайте. Заявки приходят вам в Telegram мгновенно.</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">⚡</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Скорость и SEO</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Nuxt.js с pre-rendering — сайт грузится мгновенно. SEO-оптимизация под геозапросы вашего района.</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">🌐</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Хостинг и домен</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Домен и хостинг включены в абонемент. Технические вопросы полностью на нас.</p>
            </div>
          </div>
        </section>

        <!-- Почему Nuxt.js -->
        <section class="mb-20" aria-label="Почему сайт для салона красоты на Nuxt.js">
          <h2 class="section-title mb-5" style="font-size: clamp(1.5rem, 3vw, 2.5rem);">Почему сайты на Nuxt.js занимают первые позиции</h2>
          <p class="section-subtitle max-w-2xl mb-10">Скорость загрузки — один из главных факторов ранжирования в Google и Яндексе. Сайты на Nuxt.js с pre-rendering обгоняют конкурентов на WordPress технически.</p>
          <div class="grid sm:grid-cols-3 gap-6 max-w-3xl">
            <div style="text-align: center; padding: 24px;">
              <div style="font-size: 2rem; font-weight: 800; color: var(--accent); font-family: 'Syne', sans-serif;">100</div>
              <div style="color: var(--ink-3); font-size: 0.875rem; margin-top: 4px;">PageSpeed Score<br>в Google</div>
            </div>
            <div style="text-align: center; padding: 24px;">
              <div style="font-size: 2rem; font-weight: 800; color: var(--accent); font-family: 'Syne', sans-serif;">&lt;1с</div>
              <div style="color: var(--ink-3); font-size: 0.875rem; margin-top: 4px;">загрузка первого<br>экрана (LCP)</div>
            </div>
            <div style="text-align: center; padding: 24px;">
              <div style="font-size: 2rem; font-weight: 800; color: var(--accent); font-family: 'Syne', sans-serif;">SSL</div>
              <div style="color: var(--ink-3); font-size: 0.875rem; margin-top: 4px;">HTTPS и защита<br>данных клиентов</div>
            </div>
          </div>
        </section>

        <!-- Для кого -->
        <section class="mb-20" aria-label="Кому нужен сайт для бьюти-бизнеса">
          <h2 class="section-title mb-10" style="font-size: clamp(1.5rem, 3vw, 2.5rem);">Кому мы делаем сайты</h2>
          <div class="grid sm:grid-cols-2 gap-4 max-w-2xl">
            <div style="display: flex; align-items: center; gap: 12px; padding: 16px; border-radius: 12px; background: var(--surface-warm);">
              <span style="color: var(--accent); font-size: 1.2rem;">✓</span>
              <span style="color: var(--ink-3); font-size: 0.9rem;">Салоны красоты в Москве и Подмосковье</span>
            </div>
            <div style="display: flex; align-items: center; gap: 12px; padding: 16px; border-radius: 12px; background: var(--surface-warm);">
              <span style="color: var(--accent); font-size: 1.2rem;">✓</span>
              <span style="color: var(--ink-3); font-size: 0.9rem;">Ногтевые студии и мастера маникюра</span>
            </div>
            <div style="display: flex; align-items: center; gap: 12px; padding: 16px; border-radius: 12px; background: var(--surface-warm);">
              <span style="color: var(--accent); font-size: 1.2rem;">✓</span>
              <span style="color: var(--ink-3); font-size: 0.9rem;">Косметологические кабинеты и клиники</span>
            </div>
            <div style="display: flex; align-items: center; gap: 12px; padding: 16px; border-radius: 12px; background: var(--surface-warm);">
              <span style="color: var(--accent); font-size: 1.2rem;">✓</span>
              <span style="color: var(--ink-3); font-size: 0.9rem;">Brow bar, лэш-студии, барбершопы</span>
            </div>
          </div>
        </section>

        <!-- FAQ -->
        <section class="mb-20" aria-label="Вопросы о разработке сайта для салона красоты">
          <h2 class="section-title mb-10" style="font-size: clamp(1.5rem, 3vw, 2.5rem);">Частые вопросы</h2>
          <div style="max-width: 720px; display: flex; flex-direction: column; gap: 16px;">
            <div class="card p-6">
              <h3 style="font-weight: 700; margin-bottom: 8px; font-size: 1rem;">Сколько стоит разработка сайта для салона красоты?</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">При отдельном заказе — от 80 000 ₽. В абонементе Бугаев Веб разработка сайта входит без доплат — за 50 000 ₽/мес получаете сайт + SMM + бот + CRM.</p>
            </div>
            <div class="card p-6">
              <h3 style="font-weight: 700; margin-bottom: 8px; font-size: 1rem;">Как долго делается сайт для салона красоты?</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Базовый сайт готов за 7–14 дней после сбора информации о вашем салоне и согласования структуры.</p>
            </div>
            <div class="card p-6">
              <h3 style="font-weight: 700; margin-bottom: 8px; font-size: 1rem;">Нужен ли сайт, если есть Instagram?</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Да. Сайт ранжируется в Google и Яндексе по геозапросам вашего района. Клиенты, которые ищут "маникюр рядом" или "косметолог в Митино", не увидят вас без сайта.</p>
            </div>
            <div class="card p-6">
              <h3 style="font-weight: 700; margin-bottom: 8px; font-size: 1rem;">Кто обновляет сайт после запуска?</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Обновления прайса, портфолио и информации — на нас. Вам не нужно разбираться в технике.</p>
            </div>
          </div>
        </section>

        <!-- CTA -->
        <section style="background: var(--ink); border-radius: 20px; padding: 56px 40px; text-align: center;" aria-label="Заказать сайт для салона красоты">
          <h2 style="font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(1.5rem, 3vw, 2.2rem); color: #fff; margin-bottom: 12px;">Получите сайт для салона красоты в составе абонемента</h2>
          <p style="color: rgba(255,255,255,0.5); margin-bottom: 32px; max-width: 480px; margin-left: auto; margin-right: auto;">50 000 ₽/мес — сайт + SMM + Telegram-бот + CRM YCLIENTS. Без доплат и скрытых платежей.</p>
          <a href="#contact" class="btn-accent">Оставить заявку</a>
        </section>

        <LeadForm />
        <ServiceRelated current="/sait-salon-krasoty" />

      </div>
    </main>
    <Footer />
    <component :is="'script'" type="application/ld+json" v-html="schemaJson" />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Разработка сайта для салона красоты в Москве под ключ | Бугаев Веб',
  description: 'Сайт для салона красоты: прайс-лист, портфолио работ, онлайн-запись, SEO под запросы вашего района Москвы. Nuxt.js, скорость 100/100. Входит в абонемент 50 000 ₽/мес.',
  ogTitle: 'Сайт для салона красоты под ключ в Москве | Бугаев Веб',
  ogDescription: 'Разработка сайта для салона красоты: прайс, портфолио, онлайн-запись, SEO. Входит в абонемент 50 000 ₽/мес.',
  ogUrl: 'https://bugaev-web.ru/sait-salon-krasoty',
  ogType: 'website',
  ogLocale: 'ru_RU',
  ogSiteName: 'Бугаев Веб',
  ogImage: 'https://bugaev-web.ru/og-image.jpg',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Сайт для салона красоты — Бугаев Веб',
  twitterDescription: 'Разработка сайта для салона красоты в Москве. Входит в абонемент 50 000 ₽/мес.',
  twitterImage: 'https://bugaev-web.ru/og-image.jpg',
})

useHead({
  htmlAttrs: { lang: 'ru' },
  link: [{ rel: 'canonical', href: 'https://bugaev-web.ru/sait-salon-krasoty' }],
})

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Главная",                "item": "https://bugaev-web.ru/" },
        { "@type": "ListItem", "position": 2, "name": "Услуги",                 "item": "https://bugaev-web.ru/uslugi" },
        { "@type": "ListItem", "position": 3, "name": "Сайт для салона красоты","item": "https://bugaev-web.ru/sait-salon-krasoty" }
      ]
    },
    {
      "@type": "Service",
      "name": "Разработка сайта для салона красоты в Москве",
      "description": "Создание сайта-визитки для салонов красоты, ногтевых студий и клиник на Nuxt.js: прайс-лист, портфолио работ, форма онлайн-записи, SEO-оптимизация под геозапросы, адаптация под смартфоны.",
      "provider": { "@id": "https://bugaev-web.ru/#business" },
      "areaServed": { "@type": "City", "name": "Москва" },
      "serviceType": "Разработка сайтов для бьюти-бизнеса",
      "offers": {
        "@type": "Offer",
        "price": "50000",
        "priceCurrency": "RUB",
        "availability": "https://schema.org/InStock",
        "description": "Входит в абонемент Digital + SMM"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Сколько стоит сайт для салона красоты?",
          "acceptedAnswer": { "@type": "Answer", "text": "При отдельном заказе — от 80 000 ₽. В абонементе Бугаев Веб разработка сайта входит без доплат — 50 000 ₽/мес включает сайт + SMM + бот + CRM." }
        },
        {
          "@type": "Question",
          "name": "Как долго делается сайт для салона красоты?",
          "acceptedAnswer": { "@type": "Answer", "text": "Базовый сайт готов за 7–14 дней после сбора информации и согласования структуры." }
        },
        {
          "@type": "Question",
          "name": "Нужен ли сайт салону красоты, если есть Instagram?",
          "acceptedAnswer": { "@type": "Answer", "text": "Да. Сайт ранжируется в Google и Яндексе по геозапросам. Клиенты, ищущие 'маникюр рядом' или 'косметолог в [районе]', не найдут вас без сайта." }
        }
      ]
    }
  ]
}
const schemaJson = JSON.stringify(schema)
</script>
