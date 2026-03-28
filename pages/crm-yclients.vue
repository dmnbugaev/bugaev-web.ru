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
          <span style="color: var(--ink);">Настройка CRM YCLIENTS</span>
        </nav>

        <!-- Заголовок -->
        <div class="mb-16">
          <span class="badge mb-5">CRM YCLIENTS</span>
          <h1 class="section-title mb-5">Настройка <span style="color: var(--accent);">CRM YCLIENTS</span><br>для салона красоты</h1>
          <p class="section-subtitle max-w-2xl mb-8">
            Полная настройка CRM YCLIENTS под ваш бизнес: расписание мастеров, клиентская база,
            финансовый учёт, автонапоминания. Обучаем персонал. Входит в абонемент <strong>50 000 ₽/мес</strong>.
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="#contact" class="btn-primary">Подключить CRM</a>
            <NuxtLink to="/" class="btn-outline">← На главную</NuxtLink>
          </div>
        </div>

        <div class="h-px mb-16" style="background: var(--border);" />

        <!-- Зачем нужна CRM -->
        <section class="mb-20" aria-label="Зачем салону красоты CRM YCLIENTS">
          <h2 class="section-title mb-5" style="font-size: clamp(1.5rem, 3vw, 2.5rem);">Зачем салону красоты нужна CRM YCLIENTS</h2>
          <p class="section-subtitle max-w-2xl mb-10">Без CRM — бумажный журнал, потеря клиентов, путаница в расписании. С YCLIENTS — чёткий учёт всего.</p>
          <div class="grid sm:grid-cols-2 gap-6 max-w-3xl">
            <div class="card p-6">
              <h3 style="font-weight: 700; margin-bottom: 8px; color: var(--ink);">Без CRM YCLIENTS</h3>
              <ul style="color: var(--ink-3); font-size: 0.9rem; line-height: 2; list-style: none; padding: 0;">
                <li>✗ Бумажный журнал или Excel</li>
                <li>✗ Клиенты теряются и не возвращаются</li>
                <li>✗ Нет напоминаний — высокий процент неявок</li>
                <li>✗ Непонятно, кто из мастеров сколько заработал</li>
                <li>✗ Нет базы для повторных продаж</li>
              </ul>
            </div>
            <div class="card p-6" style="border-color: var(--accent);">
              <h3 style="font-weight: 700; margin-bottom: 8px; color: var(--ink);">С CRM YCLIENTS от Бугаев Веб</h3>
              <ul style="color: var(--ink-3); font-size: 0.9rem; line-height: 2; list-style: none; padding: 0;">
                <li style="color: var(--accent-text);">✓ Единое расписание всех мастеров</li>
                <li style="color: var(--accent-text);">✓ Автонапоминания — неявки снижаются на 70%</li>
                <li style="color: var(--accent-text);">✓ Полная история каждого клиента</li>
                <li style="color: var(--accent-text);">✓ Финансовая аналитика по услугам и мастерам</li>
                <li style="color: var(--accent-text);">✓ База для рассылок акций и предложений</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Что делаем при настройке -->
        <section class="mb-20" aria-label="Что входит в настройку YCLIENTS">
          <h2 class="section-title mb-10" style="font-size: clamp(1.5rem, 3vw, 2.5rem);">Что входит в настройку YCLIENTS</h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">👥</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Профили мастеров</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Создаём профили каждого мастера с расписанием, услугами и ценами. Настраиваем доступы.</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">💰</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Прайс-лист услуг</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Заносим все услуги с ценами, продолжительностью и расходными материалами.</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">🔔</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Автонапоминания</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Настраиваем автоматические SMS и сообщения в мессенджеры за 24 и 2 часа до визита.</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">📊</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Финансовая аналитика</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Отчёты по выручке, загрузке мастеров, популярным услугам — видите бизнес в цифрах.</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">📲</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Виджет онлайн-записи</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Устанавливаем виджет онлайн-записи YCLIENTS на сайт — клиент записывается прямо оттуда.</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">🎓</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Обучение персонала</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Обучаем администраторов и мастеров работать в YCLIENTS. Видеоинструкции остаются у вас.</p>
            </div>
          </div>
        </section>

        <!-- Результаты -->
        <section class="mb-20" style="background: var(--surface-warm); border-radius: 20px; padding: 48px 40px;" aria-label="Результаты настройки CRM YCLIENTS">
          <h2 style="font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(1.3rem, 2.5vw, 2rem); margin-bottom: 32px; color: var(--ink);">Реальные результаты после настройки</h2>
          <div class="grid sm:grid-cols-3 gap-8">
            <div>
              <div style="font-size: 2.5rem; font-weight: 800; color: var(--accent); font-family: 'Syne', sans-serif; margin-bottom: 4px;">−17%</div>
              <p style="color: var(--ink-3); font-size: 0.875rem;">снижение неявок: с 25% до 8% — барбершоп NordCut, Люблино</p>
            </div>
            <div>
              <div style="font-size: 2.5rem; font-weight: 800; color: var(--accent); font-family: 'Syne', sans-serif; margin-bottom: 4px;">7 дн</div>
              <p style="color: var(--ink-3); font-size: 0.875rem;">срок полной настройки CRM YCLIENTS под специфику вашего бизнеса</p>
            </div>
            <div>
              <div style="font-size: 2.5rem; font-weight: 800; color: var(--accent); font-family: 'Syne', sans-serif; margin-bottom: 4px;">100%</div>
              <p style="color: var(--ink-3); font-size: 0.875rem;">клиентской базы в одном месте — история визитов, предпочтения, контакты</p>
            </div>
          </div>
        </section>

        <!-- FAQ -->
        <section class="mb-20" aria-label="Вопросы о настройке CRM YCLIENTS">
          <h2 class="section-title mb-10" style="font-size: clamp(1.5rem, 3vw, 2.5rem);">Частые вопросы</h2>
          <div style="max-width: 720px; display: flex; flex-direction: column; gap: 16px;">
            <div class="card p-6">
              <h3 style="font-weight: 700; margin-bottom: 8px; font-size: 1rem;">Что такое CRM YCLIENTS?</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">YCLIENTS — специализированная CRM для бьюти-бизнеса и сферы услуг. Помогает вести расписание мастеров, клиентскую базу, финансы, онлайн-запись и автоматические напоминания.</p>
            </div>
            <div class="card p-6">
              <h3 style="font-weight: 700; margin-bottom: 8px; font-size: 1rem;">Сколько стоит настройка YCLIENTS?</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">При отдельном заказе настройка — от 15 000–30 000 ₽ + стоимость лицензии YCLIENTS. В абонементе Бугаев Веб настройка входит без доплат — 50 000 ₽/мес включает всё.</p>
            </div>
            <div class="card p-6">
              <h3 style="font-weight: 700; margin-bottom: 8px; font-size: 1rem;">Можно ли перенести старую базу клиентов в YCLIENTS?</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Да. Переносим базу из Excel, Google Sheets, предыдущих CRM или телефонных книг в YCLIENTS. Ни один клиент не потеряется.</p>
            </div>
            <div class="card p-6">
              <h3 style="font-weight: 700; margin-bottom: 8px; font-size: 1rem;">Сложно ли персоналу освоить YCLIENTS?</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Нет. Проводим обучение администраторов и мастеров, записываем видеоинструкции. Большинство сотрудников осваивают систему за 1–2 дня.</p>
            </div>
          </div>
        </section>

        <!-- CTA -->
        <section style="background: var(--ink); border-radius: 20px; padding: 56px 40px; text-align: center;" aria-label="Подключить CRM YCLIENTS для салона красоты">
          <h2 style="font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(1.5rem, 3vw, 2.2rem); color: #fff; margin-bottom: 12px;">Настройте YCLIENTS и перестаньте терять клиентов</h2>
          <p style="color: rgba(255,255,255,0.5); margin-bottom: 32px; max-width: 480px; margin-left: auto; margin-right: auto;">Настройка CRM + сайт + SMM + Telegram-бот в одном абонементе 50 000 ₽/мес.</p>
          <a href="#contact" class="btn-accent">Оставить заявку</a>
        </section>

        <LeadForm />
        <ServiceRelated current="/crm-yclients" />

      </div>
    </main>
    <Footer />
    <component :is="'script'" type="application/ld+json" v-html="schemaJson" />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Настройка CRM YCLIENTS для салона красоты в Москве | Бугаев Веб',
  description: 'Полная настройка CRM YCLIENTS для салона красоты: расписание мастеров, клиентская база, автонапоминания, финансовая аналитика, обучение персонала. Москва. Входит в абонемент 50 000 ₽/мес.',
  ogTitle: 'Настройка CRM YCLIENTS для салона красоты | Бугаев Веб',
  ogDescription: 'Полная настройка YCLIENTS: расписание, база клиентов, напоминания, аналитика. Неявки снижаются на 70%. Входит в абонемент 50 000 ₽/мес.',
  ogUrl: 'https://bugaev-web.ru/crm-yclients',
  ogType: 'website',
  ogLocale: 'ru_RU',
  ogSiteName: 'Бугаев Веб',
  ogImage: 'https://bugaev-web.ru/og-image.jpg',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Настройка CRM YCLIENTS — Бугаев Веб',
  twitterDescription: 'Настройка YCLIENTS для салона красоты в Москве. Входит в абонемент 50 000 ₽/мес.',
  twitterImage: 'https://bugaev-web.ru/og-image.jpg',
})

useHead({
  htmlAttrs: { lang: 'ru' },
  link: [{ rel: 'canonical', href: 'https://bugaev-web.ru/crm-yclients' }],
})

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Главная",              "item": "https://bugaev-web.ru/" },
        { "@type": "ListItem", "position": 2, "name": "Услуги",               "item": "https://bugaev-web.ru/uslugi" },
        { "@type": "ListItem", "position": 3, "name": "Настройка CRM YCLIENTS","item": "https://bugaev-web.ru/crm-yclients" }
      ]
    },
    {
      "@type": "Service",
      "name": "Настройка CRM YCLIENTS для салона красоты",
      "description": "Полная настройка CRM-системы YCLIENTS для бьюти-бизнеса в Москве: создание профилей мастеров, заполнение прайс-листа, настройка автонапоминаний, перенос клиентской базы, обучение персонала, подключение виджета онлайн-записи.",
      "provider": { "@id": "https://bugaev-web.ru/#business" },
      "areaServed": { "@type": "City", "name": "Москва" },
      "serviceType": "Настройка CRM для бьюти-бизнеса",
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
          "name": "Что такое CRM YCLIENTS для салона красоты?",
          "acceptedAnswer": { "@type": "Answer", "text": "YCLIENTS — специализированная CRM для бьюти-бизнеса. Помогает вести расписание мастеров, клиентскую базу, финансы, онлайн-запись и автоматические напоминания о визитах." }
        },
        {
          "@type": "Question",
          "name": "Сколько стоит настройка YCLIENTS для салона красоты в Москве?",
          "acceptedAnswer": { "@type": "Answer", "text": "При отдельном заказе настройка — от 15 000–30 000 ₽ плюс лицензия YCLIENTS. В абонементе Бугаев Веб за 50 000 ₽/мес настройка входит без доплат." }
        },
        {
          "@type": "Question",
          "name": "Как не терять клиентов в салоне красоты с помощью CRM?",
          "acceptedAnswer": { "@type": "Answer", "text": "CRM YCLIENTS хранит всю историю клиента, автоматически напоминает о визите и позволяет делать рассылки с акциями. Неявки снижаются с 25% до 5–8%." }
        }
      ]
    }
  ]
}
const schemaJson = JSON.stringify(schema)
</script>
