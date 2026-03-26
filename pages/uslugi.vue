<template>
  <div style="background: var(--surface);">
    <Header />
    <main class="pt-28 pb-20">
      <div class="section-container">

        <div class="mb-16">
          <span class="badge mb-5">Все услуги</span>
          <h1 class="section-title mb-5">Услуги <span style="color: var(--accent);">Бугаев Веб</span><br>для бьюти-бизнеса</h1>
          <p class="section-subtitle max-w-2xl mb-8">
            Комплексное digital-продвижение для салонов красоты, ногтевых студий, косметологов,
            brow bar, лэш-студий и барбершопов в Москве. Все услуги — в одном абонементе <strong>50 000 ₽/мес</strong>.
          </p>
          <NuxtLink to="/#form" class="btn-primary">Оставить заявку</NuxtLink>
        </div>

        <div class="h-px mb-16" style="background: var(--border);" />

        <section aria-label="Список услуг Бугаев Веб">
          <h2 class="section-title mb-10" style="font-size: clamp(1.5rem, 3vw, 2.5rem);">Что входит в абонемент</h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <NuxtLink to="/smm-salon-krasoty" class="card p-7" style="text-decoration: none; display: block;">
              <div style="font-size: 2rem; margin-bottom: 16px;">📱</div>
              <h2 style="font-weight: 800; font-size: 1.1rem; margin-bottom: 8px; color: var(--ink); font-family: 'Syne', sans-serif;">SMM для салона красоты</h2>
              <p style="color: var(--ink-3); font-size: 0.875rem; line-height: 1.6; margin-bottom: 16px;">Ведение Instagram и Telegram: контент-план, публикации 3–4 раза/неделю, сторис, обработка директа.</p>
              <span style="color: var(--accent-text); font-size: 0.8rem; font-weight: 600;">Подробнее →</span>
            </NuxtLink>

            <NuxtLink to="/sait-salon-krasoty" class="card p-7" style="text-decoration: none; display: block;">
              <div style="font-size: 2rem; margin-bottom: 16px;">🌐</div>
              <h2 style="font-weight: 800; font-size: 1.1rem; margin-bottom: 8px; color: var(--ink); font-family: 'Syne', sans-serif;">Сайт для салона красоты</h2>
              <p style="color: var(--ink-3); font-size: 0.875rem; line-height: 1.6; margin-bottom: 16px;">SEO-сайт на Nuxt.js: прайс-лист, портфолио работ, форма онлайн-записи, адаптация под смартфоны.</p>
              <span style="color: var(--accent-text); font-size: 0.8rem; font-weight: 600;">Подробнее →</span>
            </NuxtLink>

            <NuxtLink to="/telegram-bot-zapis" class="card p-7" style="text-decoration: none; display: block;">
              <div style="font-size: 2rem; margin-bottom: 16px;">🤖</div>
              <h2 style="font-weight: 800; font-size: 1.1rem; margin-bottom: 8px; color: var(--ink); font-family: 'Syne', sans-serif;">Telegram-бот для онлайн-записи</h2>
              <p style="color: var(--ink-3); font-size: 0.875rem; line-height: 1.6; margin-bottom: 16px;">Автозапись клиентов 24/7, напоминания о визитах. Неявки снижаются на 60–70%.</p>
              <span style="color: var(--accent-text); font-size: 0.8rem; font-weight: 600;">Подробнее →</span>
            </NuxtLink>

            <NuxtLink to="/crm-yclients" class="card p-7" style="text-decoration: none; display: block;">
              <div style="font-size: 2rem; margin-bottom: 16px;">📊</div>
              <h2 style="font-weight: 800; font-size: 1.1rem; margin-bottom: 8px; color: var(--ink); font-family: 'Syne', sans-serif;">Настройка CRM YCLIENTS</h2>
              <p style="color: var(--ink-3); font-size: 0.875rem; line-height: 1.6; margin-bottom: 16px;">Полная настройка CRM: расписание мастеров, клиентская база, финансовая аналитика, обучение персонала.</p>
              <span style="color: var(--accent-text); font-size: 0.8rem; font-weight: 600;">Подробнее →</span>
            </NuxtLink>

            <NuxtLink to="/nogtevaiya-studiya" class="card p-7" style="text-decoration: none; display: block;">
              <div style="font-size: 2rem; margin-bottom: 16px;">💅</div>
              <h2 style="font-weight: 800; font-size: 1.1rem; margin-bottom: 8px; color: var(--ink); font-family: 'Syne', sans-serif;">Продвижение ногтевой студии</h2>
              <p style="color: var(--ink-3); font-size: 0.875rem; line-height: 1.6; margin-bottom: 16px;">SMM, сайт и Telegram-бот специально для ногтевых студий и мастеров маникюра в Москве.</p>
              <span style="color: var(--accent-text); font-size: 0.8rem; font-weight: 600;">Подробнее →</span>
            </NuxtLink>

            <div class="card p-7" style="background: var(--ink); border-color: var(--ink);">
              <div style="font-size: 2rem; margin-bottom: 16px;">👤</div>
              <h2 style="font-weight: 800; font-size: 1.1rem; margin-bottom: 8px; color: #fff; font-family: 'Syne', sans-serif;">Личный менеджер</h2>
              <p style="color: rgba(255,255,255,0.5); font-size: 0.875rem; line-height: 1.6; margin-bottom: 16px;">Бугаев Дмитрий на связи 6 дней в неделю. Еженедельные отчёты, стратегия, поддержка.</p>
              <NuxtLink to="/#form" style="color: var(--accent); font-size: 0.8rem; font-weight: 600; text-decoration: none;">Связаться →</NuxtLink>
            </div>

          </div>
        </section>

        <div class="h-px my-20" style="background: var(--border);" />

        <!-- Для кого -->
        <section class="mb-20" aria-label="Для кого услуги Бугаев Веб">
          <h2 class="section-title mb-10" style="font-size: clamp(1.5rem, 3vw, 2.5rem);">Для каких бизнесов подходит</h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div style="padding: 20px; border-radius: 12px; background: var(--surface-warm); text-align: center;">
              <div style="font-size: 1.5rem; margin-bottom: 8px;">💇</div>
              <strong style="display: block; font-size: 0.9rem;">Салоны красоты</strong>
            </div>
            <div style="padding: 20px; border-radius: 12px; background: var(--surface-warm); text-align: center;">
              <div style="font-size: 1.5rem; margin-bottom: 8px;">💅</div>
              <strong style="display: block; font-size: 0.9rem;">Ногтевые студии</strong>
            </div>
            <div style="padding: 20px; border-radius: 12px; background: var(--surface-warm); text-align: center;">
              <div style="font-size: 1.5rem; margin-bottom: 8px;">🧴</div>
              <strong style="display: block; font-size: 0.9rem;">Косметологи</strong>
            </div>
            <div style="padding: 20px; border-radius: 12px; background: var(--surface-warm); text-align: center;">
              <div style="font-size: 1.5rem; margin-bottom: 8px;">✨</div>
              <strong style="display: block; font-size: 0.9rem;">Brow bar</strong>
            </div>
            <div style="padding: 20px; border-radius: 12px; background: var(--surface-warm); text-align: center;">
              <div style="font-size: 1.5rem; margin-bottom: 8px;">👁️</div>
              <strong style="display: block; font-size: 0.9rem;">Лэш-студии</strong>
            </div>
            <div style="padding: 20px; border-radius: 12px; background: var(--surface-warm); text-align: center;">
              <div style="font-size: 1.5rem; margin-bottom: 8px;">✂️</div>
              <strong style="display: block; font-size: 0.9rem;">Барбершопы</strong>
            </div>
            <div style="padding: 20px; border-radius: 12px; background: var(--surface-warm); text-align: center;">
              <div style="font-size: 1.5rem; margin-bottom: 8px;">🦷</div>
              <strong style="display: block; font-size: 0.9rem;">Стоматологии</strong>
            </div>
            <div style="padding: 20px; border-radius: 12px; background: var(--surface-warm); text-align: center;">
              <div style="font-size: 1.5rem; margin-bottom: 8px;">🧘</div>
              <strong style="display: block; font-size: 0.9rem;">SPA и массаж</strong>
            </div>
          </div>
        </section>

        <!-- CTA -->
        <section style="background: var(--ink); border-radius: 20px; padding: 56px 40px; text-align: center;">
          <h2 style="font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(1.5rem, 3vw, 2.2rem); color: #fff; margin-bottom: 12px;">Все услуги — один платёж 50 000 ₽/мес</h2>
          <p style="color: rgba(255,255,255,0.5); margin-bottom: 32px; max-width: 480px; margin-left: auto; margin-right: auto;">Без найма, без налогов, без разных подрядчиков. Один специалист — вся digital-инфраструктура.</p>
          <NuxtLink to="/#form" class="btn-accent">Оставить заявку</NuxtLink>
        </section>

      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Услуги Бугаев Веб для салонов красоты — SMM, сайт, бот, CRM | Москва',
  description: 'Все услуги Бугаев Веб для бьюти-бизнеса: SMM для салона красоты, разработка сайта, Telegram-бот для онлайн-записи, настройка CRM YCLIENTS. Москва. Один абонемент 50 000 ₽/мес.',
  ogTitle: 'Услуги Бугаев Веб — Digital-продвижение для салонов красоты',
  ogDescription: 'SMM, сайт, Telegram-бот, CRM YCLIENTS для салонов красоты в Москве. Один абонемент 50 000 ₽/мес.',
  ogUrl: 'https://bugaev-web.ru/uslugi',
  ogType: 'website',
  ogLocale: 'ru_RU',
  ogSiteName: 'Бугаев Веб',
  ogImage: 'https://bugaev-web.ru/og-image.svg',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Услуги Бугаев Веб — Бугаев Веб',
  twitterDescription: 'SMM, сайт, бот, CRM для бьюти-бизнеса в Москве. 50 000 ₽/мес.',
  twitterImage: 'https://bugaev-web.ru/og-image.svg',
})

useHead({
  htmlAttrs: { lang: 'ru' },
  link: [{ rel: 'canonical', href: 'https://bugaev-web.ru/uslugi' }],
})
</script>
