<template>
  <div style="background: var(--surface);">
    <Header />
    <main class="pt-28 pb-20">
      <div class="section-container">

        <!-- Заголовок -->
        <div class="mb-16">
          <span class="badge mb-5">SMM — Соцсети</span>
          <h1 class="section-title mb-5">SMM для салона<br><span style="color: var(--accent);">красоты</span> в Москве</h1>
          <p class="section-subtitle max-w-2xl mb-8">
            Ведение Instagram и Telegram под ключ: контент-план, публикации 3–4 раза в неделю,
            сторис с акциями, обработка директа — без участия вашего персонала. Входит в абонемент <strong>50 000 ₽/мес</strong>.
          </p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink to="/#form" class="btn-primary">Оставить заявку</NuxtLink>
            <NuxtLink to="/" class="btn-outline">← На главную</NuxtLink>
          </div>
        </div>

        <div class="h-px mb-16" style="background: var(--border);" />

        <!-- Что входит -->
        <section class="mb-20" aria-label="Что входит в SMM для салона красоты">
          <h2 class="section-title mb-3" style="font-size: clamp(1.5rem, 3vw, 2.5rem);">Что входит в SMM для салона красоты</h2>
          <p class="section-subtitle mb-10 max-w-xl">Полное ведение соцсетей — от стратегии до ответа на комментарий.</p>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">📋</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Контент-план на месяц</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Расписание публикаций, темы постов и сторис на весь месяц вперёд. Согласовываем с вами.</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">📸</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Публикации 3–4 раза/неделю</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Посты с фото работ, экспертным контентом, акциями, отзывами клиентов. Регулярность — ключ к росту охватов.</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">🎬</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Сторис с акциями</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Ежедневные или через день сторис: результаты работ, закулисье, акции, прогрев к записи.</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">💬</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Обработка директа и комментариев</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Отвечаем на вопросы о ценах, записи, услугах. Ни один потенциальный клиент не уйдёт без ответа.</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">📊</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Еженедельный отчёт</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Охваты, подписчики, обращения из директа, лучшие посты. Видите, что работает.</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">📣</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Telegram-канал салона</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Ведение Telegram-канала: акции, записи, новинки, анонсы — ещё один канал для постоянных клиентов.</p>
            </div>
          </div>
        </section>

        <!-- Как работает -->
        <section class="mb-20" aria-label="Как работает SMM для салона красоты">
          <h2 class="section-title mb-10" style="font-size: clamp(1.5rem, 3vw, 2.5rem);">Как работает ведение SMM</h2>
          <div class="grid sm:grid-cols-2 gap-8 max-w-3xl">
            <div>
              <div style="font-size: 2rem; font-weight: 800; color: var(--accent); margin-bottom: 8px; font-family: 'Syne Mono', monospace;">01</div>
              <h3 style="font-weight: 700; margin-bottom: 6px;">Знакомство и стратегия</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Изучаем ваш бизнес, целевую аудиторию, конкурентов. Составляем контент-стратегию и согласовываем тональность.</p>
            </div>
            <div>
              <div style="font-size: 2rem; font-weight: 800; color: var(--accent); margin-bottom: 8px; font-family: 'Syne Mono', monospace;">02</div>
              <h3 style="font-weight: 700; margin-bottom: 6px;">Контент-план и фотоматериалы</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Составляем план на месяц, вы присылаете фото работ (15–20 фото в месяц). Остальное делаем сами.</p>
            </div>
            <div>
              <div style="font-size: 2rem; font-weight: 800; color: var(--accent); margin-bottom: 8px; font-family: 'Syne Mono', monospace;">03</div>
              <h3 style="font-weight: 700; margin-bottom: 6px;">Публикации и активность</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Ведём аккаунт каждый день: посты, сторис, ответы на сообщения. Аккаунт живёт без вашего участия.</p>
            </div>
            <div>
              <div style="font-size: 2rem; font-weight: 800; color: var(--accent); margin-bottom: 8px; font-family: 'Syne Mono', monospace;">04</div>
              <h3 style="font-weight: 700; margin-bottom: 6px;">Отчёт и корректировка</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Каждую неделю отчёт с цифрами. Анализируем, что работает лучше, и корректируем стратегию.</p>
            </div>
          </div>
        </section>

        <!-- Результаты -->
        <section class="mb-20" style="background: var(--surface-warm); border-radius: 20px; padding: 48px 40px;" aria-label="Результаты SMM для салонов красоты">
          <h2 style="font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(1.3rem, 2.5vw, 2rem); margin-bottom: 32px; color: var(--ink);">Реальные результаты клиентов</h2>
          <div class="grid sm:grid-cols-3 gap-8">
            <div>
              <div style="font-size: 2.5rem; font-weight: 800; color: var(--accent); font-family: 'Syne', sans-serif; margin-bottom: 4px;">+40%</div>
              <p style="color: var(--ink-3); font-size: 0.875rem;">записей через Instagram за первый месяц — студия Prism Beauty, Митино</p>
            </div>
            <div>
              <div style="font-size: 2.5rem; font-weight: 800; color: var(--accent); font-family: 'Syne', sans-serif; margin-bottom: 4px;">×2.5</div>
              <p style="color: var(--ink-3); font-size: 0.875rem;">рост охватов за 3 месяца ведения при нулевых рекламных расходах</p>
            </div>
            <div>
              <div style="font-size: 2.5rem; font-weight: 800; color: var(--accent); font-family: 'Syne', sans-serif; margin-bottom: 4px;">35%</div>
              <p style="color: var(--ink-3); font-size: 0.875rem;">новых клиентов из директа и комментариев — косметолог, Бутово</p>
            </div>
          </div>
        </section>

        <!-- FAQ -->
        <section class="mb-20" aria-label="Вопросы об SMM для салона красоты">
          <h2 class="section-title mb-10" style="font-size: clamp(1.5rem, 3vw, 2.5rem);">Частые вопросы</h2>
          <div style="max-width: 720px; display: flex; flex-direction: column; gap: 16px;">
            <div class="card p-6">
              <h3 style="font-weight: 700; margin-bottom: 8px; font-size: 1rem;">Мне нужно самому делать что-то в соцсетях?</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Только присылать 15–20 фото работ в месяц. Всё остальное — текст, сторис, ответы на директ — делаем мы. Вы занимаетесь бизнесом.</p>
            </div>
            <div class="card p-6">
              <h3 style="font-weight: 700; margin-bottom: 8px; font-size: 1rem;">Сколько стоит SMM для салона красоты?</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Ведение SMM входит в абонемент Бугаев Веб за 50 000 ₽/мес вместе с сайтом, Telegram-ботом и CRM. Отдельно SMM в нашей нише стоит 15 000–50 000 ₽/мес — у нас это плюс всё остальное.</p>
            </div>
            <div class="card p-6">
              <h3 style="font-weight: 700; margin-bottom: 8px; font-size: 1rem;">Через сколько будут первые результаты?</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Первые обращения из директа появляются в течение 1–2 недель после запуска регулярного контента. Устойчивый органический рост — 2–3 месяца.</p>
            </div>
            <div class="card p-6">
              <h3 style="font-weight: 700; margin-bottom: 8px; font-size: 1rem;">Работаете ли вы без рекламного бюджета?</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Да. SMM-ведение — это органический контент, без таргетированной рекламы. Для старта достаточно регулярных публикаций и активности.</p>
            </div>
          </div>
        </section>

        <!-- CTA -->
        <section style="background: var(--ink); border-radius: 20px; padding: 56px 40px; text-align: center;" aria-label="Подключить SMM для салона красоты">
          <h2 style="font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(1.5rem, 3vw, 2.2rem); color: #fff; margin-bottom: 12px;">Запустите SMM для салона красоты уже сегодня</h2>
          <p style="color: rgba(255,255,255,0.5); margin-bottom: 32px; max-width: 480px; margin-left: auto; margin-right: auto;">Входит в абонемент 50 000 ₽/мес вместе с сайтом, ботом и CRM. Результат с первого месяца.</p>
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
  title: 'SMM для салона красоты в Москве — ведение Instagram и Telegram | Бугаев Веб',
  description: 'Профессиональный SMM для салона красоты: ведение Instagram и Telegram-канала, контент-план, публикации 3–4 раза/неделю, сторис, обработка директа. Москва. Входит в абонемент 50 000 ₽/мес.',
  ogTitle: 'SMM для салона красоты в Москве | Бугаев Веб',
  ogDescription: 'Ведение Instagram и Telegram для салона красоты под ключ. Контент-план, посты, сторис, директ. Входит в абонемент 50 000 ₽/мес.',
  ogUrl: 'https://bugaev-web.ru/smm-salon-krasoty',
  ogType: 'website',
  ogLocale: 'ru_RU',
  ogSiteName: 'Бугаев Веб',
  ogImage: 'https://bugaev-web.ru/og-image.jpg',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  twitterCard: 'summary_large_image',
  twitterTitle: 'SMM для салона красоты — Бугаев Веб',
  twitterDescription: 'Ведение Instagram и Telegram для салона красоты. 50 000 ₽/мес.',
  twitterImage: 'https://bugaev-web.ru/og-image.jpg',
})

useHead({
  htmlAttrs: { lang: 'ru' },
  link: [{ rel: 'canonical', href: 'https://bugaev-web.ru/smm-salon-krasoty' }],
})

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "SMM для салона красоты в Москве",
      "description": "Ведение Instagram и Telegram-канала для салонов красоты, ногтевых студий и клиник: контент-план, публикации 3–4 раза/неделю, сторис, обработка директа, еженедельные отчёты.",
      "provider": { "@id": "https://bugaev-web.ru/#business" },
      "areaServed": { "@type": "City", "name": "Москва" },
      "serviceType": "SMM и ведение социальных сетей для бьюти-бизнеса",
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
          "name": "Мне нужно самому что-то делать в соцсетях при SMM-ведении?",
          "acceptedAnswer": { "@type": "Answer", "text": "Только присылать 15–20 фото работ в месяц. Тексты, сторис, ответы на директ — делает Бугаев Веб. Вы занимаетесь бизнесом." }
        },
        {
          "@type": "Question",
          "name": "Сколько стоит SMM для салона красоты в Москве?",
          "acceptedAnswer": { "@type": "Answer", "text": "В абонементе Бугаев Веб SMM (Instagram + Telegram) входит вместе с сайтом, ботом и CRM за 50 000 ₽/мес. Рыночная стоимость только SMM — 15 000–50 000 ₽/мес." }
        },
        {
          "@type": "Question",
          "name": "Когда появятся первые результаты от SMM для салона?",
          "acceptedAnswer": { "@type": "Answer", "text": "Первые обращения из директа — через 1–2 недели. Устойчивый органический рост охватов — через 2–3 месяца регулярного ведения." }
        }
      ]
    }
  ]
}
const schemaJson = JSON.stringify(schema)
</script>
