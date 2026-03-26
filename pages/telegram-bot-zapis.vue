<template>
  <div style="background: var(--surface);">
    <Header />
    <main class="pt-28 pb-20">
      <div class="section-container">

        <!-- Заголовок -->
        <div class="mb-16">
          <span class="badge mb-5">Telegram-бот</span>
          <h1 class="section-title mb-5">Telegram‑бот для<br><span style="color: var(--accent);">онлайн‑записи</span> клиентов</h1>
          <p class="section-subtitle max-w-2xl mb-8">
            Автоматическая запись клиентов в салон красоты 24/7 — без администратора.
            Бот принимает заявки, показывает свободное время, отправляет напоминания.
            Неявки снижаются на <strong>60–70%</strong>. Входит в абонемент <strong>50 000 ₽/мес</strong>.
          </p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink to="/#form" class="btn-primary">Подключить бота</NuxtLink>
            <NuxtLink to="/" class="btn-outline">← На главную</NuxtLink>
          </div>
        </div>

        <div class="h-px mb-16" style="background: var(--border);" />

        <!-- Как работает бот -->
        <section class="mb-20" aria-label="Как работает Telegram-бот для онлайн-записи">
          <h2 class="section-title mb-3" style="font-size: clamp(1.5rem, 3vw, 2.5rem);">Как работает бот для онлайн-записи</h2>
          <p class="section-subtitle mb-10 max-w-xl">Клиент записывается сам — вы ничего не делаете.</p>
          <div class="grid sm:grid-cols-2 gap-6 max-w-3xl">
            <div style="display: flex; gap: 16px;">
              <div style="flex-shrink: 0; width: 40px; height: 40px; border-radius: 50%; background: var(--accent-dim); display: flex; align-items: center; justify-content: center; font-weight: 800; color: var(--accent-text); font-family: 'Syne Mono', monospace;">1</div>
              <div>
                <h3 style="font-weight: 700; margin-bottom: 4px;">Клиент пишет боту</h3>
                <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Переходит по ссылке или из Instagram/Telegram-канала и пишет боту в любое время суток.</p>
              </div>
            </div>
            <div style="display: flex; gap: 16px;">
              <div style="flex-shrink: 0; width: 40px; height: 40px; border-radius: 50%; background: var(--accent-dim); display: flex; align-items: center; justify-content: center; font-weight: 800; color: var(--accent-text); font-family: 'Syne Mono', monospace;">2</div>
              <div>
                <h3 style="font-weight: 700; margin-bottom: 4px;">Выбирает услугу и мастера</h3>
                <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Бот показывает список услуг с ценами, доступных мастеров, удобное время.</p>
              </div>
            </div>
            <div style="display: flex; gap: 16px;">
              <div style="flex-shrink: 0; width: 40px; height: 40px; border-radius: 50%; background: var(--accent-dim); display: flex; align-items: center; justify-content: center; font-weight: 800; color: var(--accent-text); font-family: 'Syne Mono', monospace;">3</div>
              <div>
                <h3 style="font-weight: 700; margin-bottom: 4px;">Получает подтверждение</h3>
                <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Запись подтверждается, вы получаете уведомление. Клиент сразу знает — он в расписании.</p>
              </div>
            </div>
            <div style="display: flex; gap: 16px;">
              <div style="flex-shrink: 0; width: 40px; height: 40px; border-radius: 50%; background: var(--accent-dim); display: flex; align-items: center; justify-content: center; font-weight: 800; color: var(--accent-text); font-family: 'Syne Mono', monospace;">4</div>
              <div>
                <h3 style="font-weight: 700; margin-bottom: 4px;">Получает напоминания</h3>
                <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">За 24 часа и за 2 часа до визита — автоматическое напоминание. Неявки снижаются на 60–70%.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Что умеет бот -->
        <section class="mb-20" aria-label="Функции Telegram-бота для салона красоты">
          <h2 class="section-title mb-10" style="font-size: clamp(1.5rem, 3vw, 2.5rem);">Что умеет наш Telegram-бот</h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">🕐</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Работает 24/7</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Принимает записи ночью, в выходные, в праздники — без участия администратора.</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">📅</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Актуальное расписание</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Показывает только свободные слоты из CRM YCLIENTS. Двойные записи исключены.</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">🔔</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Автонапоминания</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Напоминает клиенту о визите за 24 часа и за 2 часа. Неявки падают с 25% до 5–8%.</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">💬</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Сбор отзывов</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">После визита бот просит оставить отзыв. Автоматически растёт база отзывов на картах и в соцсетях.</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">📲</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Повторные записи</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Через 3–4 недели после визита бот напоминает о записи снова — клиент возвращается чаще.</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">🔗</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Интеграция с YCLIENTS</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Записи попадают прямо в CRM-систему. Никаких ручных переносов в расписание.</p>
            </div>
          </div>
        </section>

        <!-- Результаты -->
        <section class="mb-20" style="background: var(--surface-warm); border-radius: 20px; padding: 48px 40px;" aria-label="Результаты Telegram-бота для онлайн-записи">
          <h2 style="font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(1.3rem, 2.5vw, 2rem); margin-bottom: 32px; color: var(--ink);">Цифры клиентов Бугаев Веб</h2>
          <div class="grid sm:grid-cols-3 gap-8">
            <div>
              <div style="font-size: 2.5rem; font-weight: 800; color: var(--accent); font-family: 'Syne', sans-serif; margin-bottom: 4px;">35%</div>
              <p style="color: var(--ink-3); font-size: 0.875rem;">всех новых записей идут через бота уже в первый месяц — косметолог, Бутово</p>
            </div>
            <div>
              <div style="font-size: 2.5rem; font-weight: 800; color: var(--accent); font-family: 'Syne', sans-serif; margin-bottom: 4px;">−70%</div>
              <p style="color: var(--ink-3); font-size: 0.875rem;">снижение неявок благодаря автоматическим напоминаниям о визите</p>
            </div>
            <div>
              <div style="font-size: 2.5rem; font-weight: 800; color: var(--accent); font-family: 'Syne', sans-serif; margin-bottom: 4px;">24/7</div>
              <p style="color: var(--ink-3); font-size: 0.875rem;">принимает записи без участия администратора в любое время суток</p>
            </div>
          </div>
        </section>

        <!-- FAQ -->
        <section class="mb-20" aria-label="Вопросы о Telegram-боте для онлайн-записи">
          <h2 class="section-title mb-10" style="font-size: clamp(1.5rem, 3vw, 2.5rem);">Частые вопросы</h2>
          <div style="max-width: 720px; display: flex; flex-direction: column; gap: 16px;">
            <div class="card p-6">
              <h3 style="font-weight: 700; margin-bottom: 8px; font-size: 1rem;">Нужно ли клиентам скачивать что-то?</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Нет. Telegram установлен у 80%+ смартфонов в России. Клиент просто нажимает на ссылку и пишет боту — никаких установок.</p>
            </div>
            <div class="card p-6">
              <h3 style="font-weight: 700; margin-bottom: 8px; font-size: 1rem;">Сколько стоит Telegram-бот для онлайн-записи?</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">При отдельном заказе разработка бота — от 30 000–50 000 ₽. В абонементе Бугаев Веб бот входит в стоимость 50 000 ₽/мес без доплат.</p>
            </div>
            <div class="card p-6">
              <h3 style="font-weight: 700; margin-bottom: 8px; font-size: 1rem;">Как клиенты узнают о боте?</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Ссылку на бота размещаем в Instagram (шапка профиля, сторис), на сайте, в Telegram-канале. Первые записи через бота — в течение первой недели.</p>
            </div>
            <div class="card p-6">
              <h3 style="font-weight: 700; margin-bottom: 8px; font-size: 1rem;">Бот работает для нескольких мастеров?</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Да. Клиент выбирает мастера и удобное время в расписании каждого. Работает для 1, 5, 10 и более мастеров.</p>
            </div>
          </div>
        </section>

        <!-- CTA -->
        <section style="background: var(--ink); border-radius: 20px; padding: 56px 40px; text-align: center;" aria-label="Подключить Telegram-бот для онлайн-записи">
          <h2 style="font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(1.5rem, 3vw, 2.2rem); color: #fff; margin-bottom: 12px;">Подключите онлайн-запись через Telegram-бот</h2>
          <p style="color: rgba(255,255,255,0.5); margin-bottom: 32px; max-width: 480px; margin-left: auto; margin-right: auto;">Бот + сайт + SMM + CRM в одном абонементе 50 000 ₽/мес. Запись пойдёт уже в первую неделю.</p>
          <NuxtLink to="/#form" class="btn-accent">Оставить заявку</NuxtLink>
        </section>

      </div>
    </main>
    <Footer />
    <component :is="'script'" type="application/ld+json" v-html="schemaJson" />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Telegram-бот для онлайн-записи клиентов в салон красоты | Бугаев Веб',
  description: 'Telegram-бот для онлайн-записи: автозапись 24/7, напоминания клиентам, снижение неявок на 70%, интеграция с CRM YCLIENTS. Для салонов красоты Москвы. Входит в абонемент 50 000 ₽/мес.',
  ogTitle: 'Telegram-бот для онлайн-записи в салон красоты | Бугаев Веб',
  ogDescription: 'Автоматическая запись клиентов 24/7 без администратора. Напоминания, снижение неявок на 70%. Входит в абонемент 50 000 ₽/мес.',
  ogUrl: 'https://bugaev-web.ru/telegram-bot-zapis',
  ogType: 'website',
  ogLocale: 'ru_RU',
  ogSiteName: 'Бугаев Веб',
  ogImage: 'https://bugaev-web.ru/og-image.svg',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Telegram-бот для онлайн-записи — Бугаев Веб',
  twitterDescription: 'Автозапись клиентов 24/7, напоминания, снижение неявок. Для салонов красоты Москвы.',
  twitterImage: 'https://bugaev-web.ru/og-image.svg',
})

useHead({
  htmlAttrs: { lang: 'ru' },
  link: [{ rel: 'canonical', href: 'https://bugaev-web.ru/telegram-bot-zapis' }],
})

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Telegram-бот для онлайн-записи клиентов в салон красоты",
      "description": "Автоматическая запись клиентов в салон красоты через Telegram-бот: приём записей 24/7, показ расписания мастеров, подтверждение записи, автонапоминания за 24 и 2 часа, сбор отзывов, интеграция с CRM YCLIENTS.",
      "provider": { "@id": "https://bugaev-web.ru/#business" },
      "areaServed": { "@type": "City", "name": "Москва" },
      "serviceType": "Разработка Telegram-бота для онлайн-записи",
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
          "name": "Нужно ли скачивать приложение для Telegram-бота записи?",
          "acceptedAnswer": { "@type": "Answer", "text": "Нет. Telegram установлен у большинства пользователей смартфонов. Клиент переходит по ссылке и сразу начинает запись." }
        },
        {
          "@type": "Question",
          "name": "Сколько стоит Telegram-бот для онлайн-записи в салон красоты?",
          "acceptedAnswer": { "@type": "Answer", "text": "При отдельном заказе — от 30 000 ₽. В абонементе Бугаев Веб бот входит без доплат: 50 000 ₽/мес включает бота, сайт, SMM и CRM." }
        },
        {
          "@type": "Question",
          "name": "Как снизить неявки клиентов в салон красоты?",
          "acceptedAnswer": { "@type": "Answer", "text": "Telegram-бот отправляет автоматические напоминания за 24 часа и за 2 часа до визита. Неявки снижаются с 20–25% до 5–8%." }
        }
      ]
    }
  ]
}
const schemaJson = JSON.stringify(schema)
</script>
