<template>
  <div style="background: var(--surface);">
    <Header />
    <main class="pt-28 pb-20">
      <div class="section-container">

        <!-- Заголовок -->
        <div class="mb-16">
          <span class="badge mb-5">Ногтевая студия</span>
          <h1 class="section-title mb-5">Продвижение<br><span style="color: var(--accent);">ногтевой студии</span><br>в Москве</h1>
          <p class="section-subtitle max-w-2xl mb-8">
            SMM, сайт, Telegram-бот для онлайн-записи и CRM для ногтевой студии и мастеров маникюра.
            Привлекаем новых клиентов и возвращаем существующих. Один абонемент — <strong>50 000 ₽/мес</strong>.
          </p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink to="/#form" class="btn-primary">Привлечь клиентов</NuxtLink>
            <NuxtLink to="/" class="btn-outline">← На главную</NuxtLink>
          </div>
        </div>

        <div class="h-px mb-16" style="background: var(--border);" />

        <!-- Как привлечь клиентов -->
        <section class="mb-20" aria-label="Как привлечь клиентов в ногтевую студию">
          <h2 class="section-title mb-5" style="font-size: clamp(1.5rem, 3vw, 2.5rem);">Как привлечь клиентов в ногтевую студию</h2>
          <p class="section-subtitle max-w-2xl mb-10">Продвижение ногтевой студии работает через три канала: Instagram, геозапросы в поиске и Telegram. Мы выстраиваем все три.</p>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">📱</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Instagram для ногтевой студии</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Фото маникюра и педикюра, результаты до/после, сторис с процессом работы, геохэштеги. 3–4 поста в неделю — без вашего участия.</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">🔍</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">SEO-сайт под геозапросы</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Клиенты ищут "маникюр [район]" и "ногтевая студия рядом". Ваш сайт появляется в первых результатах Google и Яндекса.</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">🤖</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Telegram-бот для записи</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Клиент записывается на маникюр сам — выбирает мастера, время, услугу. 35% новых записей приходит через бота уже в первый месяц.</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">💬</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Telegram-канал акций</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Канал в Telegram для постоянных клиентов: акции, свободные окна на сегодня, новинки дизайнов. Клиенты возвращаются чаще.</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">📊</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">CRM YCLIENTS</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Единое расписание всех мастеров, клиентская база, автонапоминания о визитах. Неявки снижаются на 60–70%.</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">📈</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Аналитика каждую неделю</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Отчёт: откуда пришли клиенты, сколько записей, какие услуги популярнее. Видите, что работает.</p>
            </div>
          </div>
        </section>

        <!-- Специфика нниши -->
        <section class="mb-20" aria-label="Контент для ногтевой студии в Instagram">
          <h2 class="section-title mb-5" style="font-size: clamp(1.5rem, 3vw, 2.5rem);">SMM для ногтевой студии — что публикуем</h2>
          <p class="section-subtitle max-w-2xl mb-10">Контент для продвижения ногтевой студии строится на визуале. Каждый пост работает на привлечение новых клиентов.</p>
          <div class="grid sm:grid-cols-2 gap-4 max-w-3xl">
            <div style="display: flex; align-items: flex-start; gap: 12px; padding: 20px; border-radius: 12px; background: var(--surface-warm);">
              <span style="color: var(--accent); font-size: 1.2rem; flex-shrink: 0;">✓</span>
              <div>
                <strong style="display: block; margin-bottom: 4px; font-size: 0.9rem;">Фото работ до/после</strong>
                <span style="color: var(--ink-3); font-size: 0.85rem;">Гель-лак, маникюр, педикюр, дизайн ногтей — визуальные результаты убеждают лучше любого текста.</span>
              </div>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 12px; padding: 20px; border-radius: 12px; background: var(--surface-warm);">
              <span style="color: var(--accent); font-size: 1.2rem; flex-shrink: 0;">✓</span>
              <div>
                <strong style="display: block; margin-bottom: 4px; font-size: 0.9rem;">Тренды и новинки дизайнов</strong>
                <span style="color: var(--ink-3); font-size: 0.85rem;">Публикации по сезонным трендам собирают сохранения и запросы "как записаться".</span>
              </div>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 12px; padding: 20px; border-radius: 12px; background: var(--surface-warm);">
              <span style="color: var(--accent); font-size: 1.2rem; flex-shrink: 0;">✓</span>
              <div>
                <strong style="display: block; margin-bottom: 4px; font-size: 0.9rem;">Акции и спецпредложения</strong>
                <span style="color: var(--ink-3); font-size: 0.85rem;">Акция на маникюр + педикюр, скидка первому клиенту, свободные окна на сегодня.</span>
              </div>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 12px; padding: 20px; border-radius: 12px; background: var(--surface-warm);">
              <span style="color: var(--accent); font-size: 1.2rem; flex-shrink: 0;">✓</span>
              <div>
                <strong style="display: block; margin-bottom: 4px; font-size: 0.9rem;">Отзывы клиентов</strong>
                <span style="color: var(--ink-3); font-size: 0.85rem;">Отзывы с фото работ — главный инструмент доверия для новых клиентов.</span>
              </div>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 12px; padding: 20px; border-radius: 12px; background: var(--surface-warm);">
              <span style="color: var(--accent); font-size: 1.2rem; flex-shrink: 0;">✓</span>
              <div>
                <strong style="display: block; margin-bottom: 4px; font-size: 0.9rem;">Экспертный контент</strong>
                <span style="color: var(--ink-3); font-size: 0.85rem;">Советы по уходу за ногтями, разница между покрытиями, как продлить маникюр — позиционирует как профессионала.</span>
              </div>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 12px; padding: 20px; border-radius: 12px; background: var(--surface-warm);">
              <span style="color: var(--accent); font-size: 1.2rem; flex-shrink: 0;">✓</span>
              <div>
                <strong style="display: block; margin-bottom: 4px; font-size: 0.9rem;">Геохэштеги и геометки</strong>
                <span style="color: var(--ink-3); font-size: 0.85rem;">#маникюр[район], #ногтеваястудия[район] — помогают найти вас клиентам именно в вашем районе.</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Результаты -->
        <section class="mb-20" style="background: var(--surface-warm); border-radius: 20px; padding: 48px 40px;" aria-label="Результаты продвижения ногтевой студии">
          <h2 style="font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(1.3rem, 2.5vw, 2rem); margin-bottom: 32px; color: var(--ink);">Результаты наших клиентов — ногтевые студии</h2>
          <div class="grid sm:grid-cols-3 gap-8">
            <div>
              <div style="font-size: 2.5rem; font-weight: 800; color: var(--accent); font-family: 'Syne', sans-serif; margin-bottom: 4px;">+40%</div>
              <p style="color: var(--ink-3); font-size: 0.875rem;">записей через Instagram за первый месяц ведения — студия Prism Beauty, Митино</p>
            </div>
            <div>
              <div style="font-size: 2.5rem; font-weight: 800; color: var(--accent); font-family: 'Syne', sans-serif; margin-bottom: 4px;">35%</div>
              <p style="color: var(--ink-3); font-size: 0.875rem;">новых клиентов через Telegram-бот уже в первый месяц после подключения</p>
            </div>
            <div>
              <div style="font-size: 2.5rem; font-weight: 800; color: var(--accent); font-family: 'Syne', sans-serif; margin-bottom: 4px;">2–4 нед</div>
              <p style="color: var(--ink-3); font-size: 0.875rem;">до первых новых клиентов из Instagram и поисковых систем</p>
            </div>
          </div>
        </section>

        <!-- FAQ -->
        <section class="mb-20" aria-label="Вопросы о продвижении ногтевой студии">
          <h2 class="section-title mb-10" style="font-size: clamp(1.5rem, 3vw, 2.5rem);">Частые вопросы</h2>
          <div style="max-width: 720px; display: flex; flex-direction: column; gap: 16px;">
            <div class="card p-6">
              <h3 style="font-weight: 700; margin-bottom: 8px; font-size: 1rem;">Как быстро появятся клиенты из Instagram?</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Первые запросы через директ — в течение 1–2 недель после запуска регулярного контента. Устойчивый органический поток — через 2–3 месяца.</p>
            </div>
            <div class="card p-6">
              <h3 style="font-weight: 700; margin-bottom: 8px; font-size: 1rem;">Нужны ли фотографии работ профессионального качества?</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Нет. Хорошие фото можно сделать на современный смартфон при правильном освещении. Мы дадим инструкции по съёмке. Главное — регулярность.</p>
            </div>
            <div class="card p-6">
              <h3 style="font-weight: 700; margin-bottom: 8px; font-size: 1rem;">Работаете с мастерами на дому или только со студиями?</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Работаем и с частными мастерами маникюра, работающими на дому или арендующими место, и с ногтевыми студиями. Подход адаптируем под формат бизнеса.</p>
            </div>
            <div class="card p-6">
              <h3 style="font-weight: 700; margin-bottom: 8px; font-size: 1rem;">Как продвигать ногтевую студию с нуля?</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">С нуля: сначала создаём сайт и оформляем Instagram, запускаем Telegram-бот для записи, настраиваем CRM. В первый месяц — полная digital-инфраструктура. Уже на 2–4 неделе идут первые записи.</p>
            </div>
          </div>
        </section>

        <!-- CTA -->
        <section style="background: var(--ink); border-radius: 20px; padding: 56px 40px; text-align: center;" aria-label="Продвижение ногтевой студии">
          <h2 style="font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(1.5rem, 3vw, 2.2rem); color: #fff; margin-bottom: 12px;">Запустите поток клиентов в ногтевую студию</h2>
          <p style="color: rgba(255,255,255,0.5); margin-bottom: 32px; max-width: 480px; margin-left: auto; margin-right: auto;">SMM + сайт + Telegram-бот + CRM — всё в одном абонементе 50 000 ₽/мес. Результат с первого месяца.</p>
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
  title: 'Продвижение ногтевой студии в Москве — SMM, сайт, бот для записи | Бугаев Веб',
  description: 'Комплексное продвижение ногтевой студии и мастеров маникюра в Москве: ведение Instagram, сайт с SEO, Telegram-бот для онлайн-записи, CRM YCLIENTS. Абонемент 50 000 ₽/мес.',
  ogTitle: 'Продвижение ногтевой студии в Москве | Бугаев Веб',
  ogDescription: 'SMM, сайт, Telegram-бот и CRM для ногтевой студии. Клиенты из Instagram и поисковых систем. Абонемент 50 000 ₽/мес.',
  ogUrl: 'https://bugaev-web.ru/nogtevaiya-studiya',
  ogType: 'website',
  ogLocale: 'ru_RU',
  ogSiteName: 'Бугаев Веб',
  ogImage: 'https://bugaev-web.ru/og-image.jpg',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Продвижение ногтевой студии — Бугаев Веб',
  twitterDescription: 'SMM, сайт, бот для записи и CRM для ногтевой студии в Москве.',
  twitterImage: 'https://bugaev-web.ru/og-image.jpg',
})

useHead({
  htmlAttrs: { lang: 'ru' },
  link: [{ rel: 'canonical', href: 'https://bugaev-web.ru/nogtevaiya-studiya' }],
})

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Продвижение ногтевой студии в Москве",
      "description": "Комплексное digital-продвижение ногтевой студии и мастеров маникюра в Москве: ведение Instagram (контент-план, публикации 3–4 раза/неделю, сторис), сайт-визитка с SEO, Telegram-бот для онлайн-записи, настройка CRM YCLIENTS.",
      "provider": { "@id": "https://bugaev-web.ru/#business" },
      "areaServed": { "@type": "City", "name": "Москва" },
      "serviceType": "SMM и digital-продвижение ногтевой студии",
      "offers": {
        "@type": "Offer",
        "price": "50000",
        "priceCurrency": "RUB",
        "availability": "https://schema.org/InStock",
        "description": "Абонемент Digital + SMM для ногтевой студии"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Как привлечь клиентов в ногтевую студию с нуля?",
          "acceptedAnswer": { "@type": "Answer", "text": "Создаём сайт с SEO, оформляем Instagram с регулярными публикациями, запускаем Telegram-бот для онлайн-записи, настраиваем CRM. Первые клиенты из Instagram — через 1–2 недели." }
        },
        {
          "@type": "Question",
          "name": "Нужны ли профессиональные фото для продвижения ногтевой студии?",
          "acceptedAnswer": { "@type": "Answer", "text": "Нет. Фото хорошего качества можно сделать на современный смартфон при хорошем освещении. Мы дадим инструкции по съёмке." }
        },
        {
          "@type": "Question",
          "name": "Работаете ли вы с частными мастерами маникюра, а не только со студиями?",
          "acceptedAnswer": { "@type": "Answer", "text": "Да. Работаем с частными мастерами, работающими на дому или в аренду, и с ногтевыми студиями. Подход адаптируем под формат." }
        }
      ]
    }
  ]
}
const schemaJson = JSON.stringify(schema)
</script>
