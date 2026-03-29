<template>
  <div style="background: var(--surface);">
    <Header />
    <main class="pt-28 pb-20">
      <div class="section-container">

        <!-- Заголовок -->
        <div class="mb-16">
          <span class="badge mb-5">Барбершоп</span>
          <h1 class="section-title mb-5">Продвижение<br><span style="color: var(--accent);">барбершопа</span> в Москве</h1>
          <p class="section-subtitle max-w-2xl mb-8">
            SMM, сайт и Telegram-бот для барбершопа. Заполняем кресла через Instagram, Telegram и органический поиск —
            без дорогой таргетированной рекламы. Один подрядчик. Один платёж. От <strong>50 000 ₽/мес</strong>.
          </p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink to="/#contact" class="btn-primary">Оставить заявку</NuxtLink>
            <NuxtLink to="/" class="btn-outline">← На главную</NuxtLink>
          </div>
        </div>

        <div class="h-px mb-16" style="background: var(--border);" />

        <!-- Что входит -->
        <section class="mb-20" aria-label="Что входит в продвижение барбершопа">
          <h2 class="section-title mb-3" style="font-size: clamp(1.5rem, 3vw, 2.5rem);">Что входит в продвижение барбершопа</h2>
          <p class="section-subtitle mb-10 max-w-xl">Полная цифровая инфраструктура — от первого касания клиента до повторного визита.</p>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">🌐</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">SEO-сайт барбершопа</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Быстрый сайт на Nuxt.js с галереей работ, прайсом, командой барберов, онлайн-записью. Ранжируется по запросам «барбершоп Москва», «мужская стрижка рядом».</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">📸</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">SMM: Instagram и Telegram</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Публикации 3–4 раза/неделю: стрижки и бороды «до/после», работа барберов, атмосфера, акции. Ответы на директ и комментарии включены.</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">🤖</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Telegram-бот для онлайн-записи</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Клиент выбирает барбера, услугу и время прямо в Telegram. Запись мгновенно попадает в YCLIENTS. Уведомления мастеру автоматически.</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">📋</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">CRM YCLIENTS</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Запись онлайн, история клиентов, автонапоминания о следующей стрижке через 3–4 недели. Возврат клиентов без вашего участия.</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">📊</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Аналитика и отчёты</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Еженедельный отчёт: охваты, записи, конверсия сайта. Видите, что работает, и корректируете стратегию на ходу.</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 1.5rem; margin-bottom: 12px;">⭐</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Работа с отзывами</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Помогаем собирать отзывы на Яндекс.Картах и 2ГИС. Высокий рейтинг = доверие новых клиентов без дополнительной рекламы.</p>
            </div>
          </div>
        </section>

        <!-- Почему барбершопу нужно продвижение -->
        <section class="mb-20" aria-label="Почему барбершопу нужно продвижение">
          <h2 class="section-title mb-10" style="font-size: clamp(1.5rem, 3vw, 2.5rem);">Почему барбершопу нужна система</h2>
          <div class="grid sm:grid-cols-2 gap-8 max-w-3xl">
            <div>
              <div style="font-size: 2rem; font-weight: 800; color: var(--accent); margin-bottom: 8px; font-family: 'Syne Mono', monospace;">01</div>
              <h3 style="font-weight: 700; margin-bottom: 6px;">Конкуренция высокая</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">В Москве сотни барбершопов. Тот, кто выше в поиске и активен в соцсетях, получает клиентов. Остальные ждут сарафанного радио.</p>
            </div>
            <div>
              <div style="font-size: 2rem; font-weight: 800; color: var(--accent); margin-bottom: 8px; font-family: 'Syne Mono', monospace;">02</div>
              <h3 style="font-weight: 700; margin-bottom: 6px;">Мужчины не звонят</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Большинство клиентов барбершопа — мужчины 20–40 лет. Они пишут в Telegram или бронируют онлайн. Без бота вы теряете их молча.</p>
            </div>
            <div>
              <div style="font-size: 2rem; font-weight: 800; color: var(--accent); margin-bottom: 8px; font-family: 'Syne Mono', monospace;">03</div>
              <h3 style="font-weight: 700; margin-bottom: 6px;">Постоянники = доход</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Стрижка раз в 3–4 недели — идеальная частота для возврата. CRM с автонапоминаниями превращает разовых клиентов в постоянных.</p>
            </div>
            <div>
              <div style="font-size: 2rem; font-weight: 800; color: var(--accent); margin-bottom: 8px; font-family: 'Syne Mono', monospace;">04</div>
              <h3 style="font-weight: 700; margin-bottom: 6px;">Атмосфера продаёт</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Барбершоп — это образ жизни. Фото интерьера, команды, процесса работы в Instagram создают притяжение лучше любой рекламы.</p>
            </div>
          </div>
        </section>

        <!-- Как работаем -->
        <section class="mb-20" aria-label="Этапы работы с барбершопом">
          <h2 class="section-title mb-10" style="font-size: clamp(1.5rem, 3vw, 2.5rem);">Как строится работа</h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div class="card p-6">
              <div style="font-size: 2rem; font-weight: 800; color: var(--accent); margin-bottom: 12px; font-family: 'Syne Mono', monospace;">1</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Аудит</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Изучаем ваш барбершоп, аудиторию и конкурентов. Находим точки роста за 3 дня.</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 2rem; font-weight: 800; color: var(--accent); margin-bottom: 12px; font-family: 'Syne Mono', monospace;">2</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Запуск</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Разрабатываем сайт, настраиваем бот, CRM и соцсети параллельно. Старт за 10–14 дней.</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 2rem; font-weight: 800; color: var(--accent); margin-bottom: 12px; font-family: 'Syne Mono', monospace;">3</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Ведение</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Ежедневно ведём соцсети, отвечаем клиентам, мониторим позиции. Вы занимаетесь барбершопом.</p>
            </div>
            <div class="card p-6">
              <div style="font-size: 2rem; font-weight: 800; color: var(--accent); margin-bottom: 12px; font-family: 'Syne Mono', monospace;">4</div>
              <h3 style="font-weight: 700; margin-bottom: 6px; color: var(--ink);">Результат</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Еженедельный отчёт. Видите рост записей, охватов и повторных визитов в цифрах.</p>
            </div>
          </div>
        </section>

        <!-- FAQ -->
        <section class="mb-20" aria-label="Вопросы о продвижении барбершопа">
          <h2 class="section-title mb-10" style="font-size: clamp(1.5rem, 3vw, 2.5rem);">Часто задаваемые вопросы</h2>
          <div class="grid gap-5 max-w-2xl">
            <div class="card p-6">
              <h3 style="font-weight: 700; margin-bottom: 8px; color: var(--ink);">Сколько стоит продвижение барбершопа?</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Абонемент стоит от 50 000 ₽/мес — включает сайт, SMM, Telegram-бот и CRM. Это дешевле, чем нанимать трёх отдельных специалистов.</p>
            </div>
            <div class="card p-6">
              <h3 style="font-weight: 700; margin-bottom: 8px; color: var(--ink);">Нужен ли Яндекс.Директ или таргет?</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Наш подход — органический рост через SEO и соцсети. Это дольше, но дешевле в долгосрочной перспективе. Платную рекламу подключаем по запросу отдельно.</p>
            </div>
            <div class="card p-6">
              <h3 style="font-weight: 700; margin-bottom: 8px; color: var(--ink);">Подходит ли барбершопу с несколькими барберами?</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Да. YCLIENTS поддерживает запись к конкретному мастеру. Telegram-бот и сайт покажут расписание каждого барбера с возможностью выбора.</p>
            </div>
            <div class="card p-6">
              <h3 style="font-weight: 700; margin-bottom: 8px; color: var(--ink);">Что делать, если у нас уже есть соцсети?</h3>
              <p style="color: var(--ink-3); font-size: 0.9rem; line-height: 1.6;">Отлично — возьмём существующие аккаунты и улучшим их. Проведём аудит, переработаем контент-план и ускорим рост без потери истории.</p>
            </div>
          </div>
        </section>

        <!-- CTA -->
        <section class="mb-4" aria-label="Связаться для продвижения барбершопа">
          <div class="card p-10 text-center" style="background: var(--dark);">
            <h2 style="font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(1.5rem, 3vw, 2.2rem); color: #fff; margin-bottom: 16px; letter-spacing: -0.03em;">
              Хотите полные кресла каждый день?
            </h2>
            <p style="color: rgba(255,255,255,0.5); font-size: 1rem; margin-bottom: 32px; max-width: 480px; margin-left: auto; margin-right: auto; line-height: 1.7;">
              Расскажите про ваш барбершоп — разберём ситуацию и предложим конкретный план роста без воды.
            </p>
            <div class="flex flex-wrap gap-4 justify-center">
              <NuxtLink to="/#contact" class="btn-primary">Оставить заявку</NuxtLink>
              <a href="https://t.me/bugggd" target="_blank" rel="noopener noreferrer" class="btn-outline" style="color: #fff; border-color: rgba(255,255,255,0.2);">Написать в Telegram</a>
            </div>
          </div>
        </section>

        <!-- Внутренние ссылки -->
        <section class="mt-16" aria-label="Другие услуги">
          <h2 class="section-title mb-6" style="font-size: 1.3rem;">Другие услуги Бугаев Веб</h2>
          <div class="flex flex-wrap gap-3">
            <NuxtLink to="/uslugi" class="badge" style="text-decoration: none;">Все услуги</NuxtLink>
            <NuxtLink to="/smm-salon-krasoty" class="badge" style="text-decoration: none;">SMM для салона красоты</NuxtLink>
            <NuxtLink to="/sait-salon-krasoty" class="badge" style="text-decoration: none;">Сайт для салона</NuxtLink>
            <NuxtLink to="/telegram-bot-zapis" class="badge" style="text-decoration: none;">Telegram-бот для записи</NuxtLink>
            <NuxtLink to="/crm-yclients" class="badge" style="text-decoration: none;">CRM YCLIENTS</NuxtLink>
            <NuxtLink to="/nogtevaiya-studiya" class="badge" style="text-decoration: none;">Ногтевая студия</NuxtLink>
            <NuxtLink to="/kosmetolog" class="badge" style="text-decoration: none;">Косметолог</NuxtLink>
            <NuxtLink to="/blog" class="badge" style="text-decoration: none;">Блог</NuxtLink>
          </div>
        </section>

      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Продвижение барбершопа в Москве — SMM, сайт, Telegram-бот | Бугаев Веб',
  description: 'Продвижение барбершопа в Москве: SEO-сайт, ведение Instagram, Telegram-бот для онлайн-записи, настройка YCLIENTS. Заполняем кресла без дорогой рекламы. От 50 000 ₽/мес.',
  ogTitle: 'Продвижение барбершопа в Москве | Бугаев Веб',
  ogDescription: 'SMM, сайт и Telegram-бот для барбершопа. Заполняем кресла через Instagram и органический поиск. От 50 000 ₽/мес.',
  ogType: 'website',
  ogLocale: 'ru_RU',
  ogSiteName: 'Бугаев Веб',
  ogImage: 'https://bugaev-web.ru/og-image.jpg',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://bugaev-web.ru/og-image.jpg',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://bugaev-web.ru/barbershop' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Продвижение барбершопа в Москве',
        description: 'Комплексное digital-продвижение для барбершопов: SEO-сайт, ведение соцсетей, Telegram-бот для онлайн-записи, настройка CRM YCLIENTS.',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Бугаев Веб',
          url: 'https://bugaev-web.ru',
          address: { '@type': 'PostalAddress', addressLocality: 'Москва', addressCountry: 'RU' },
        },
        areaServed: { '@type': 'City', name: 'Москва' },
        serviceType: 'Digital-маркетинг для барбершопа',
        offers: { '@type': 'Offer', priceCurrency: 'RUB', price: '50000', priceSpecification: { '@type': 'UnitPriceSpecification', priceType: 'https://schema.org/MinimumAnnotatedPrice' } },
        url: 'https://bugaev-web.ru/barbershop',
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
            name: 'Сколько стоит продвижение барбершопа?',
            acceptedAnswer: { '@type': 'Answer', text: 'Абонемент стоит от 50 000 ₽/мес — включает сайт, SMM, Telegram-бот и CRM YCLIENTS. Это дешевле, чем нанимать трёх отдельных специалистов.' },
          },
          {
            '@type': 'Question',
            name: 'Нужен ли барбершопу Яндекс.Директ или таргетированная реклама?',
            acceptedAnswer: { '@type': 'Answer', text: 'Наш подход — органический рост через SEO и соцсети. Это дешевле в долгосрочной перспективе. Платную рекламу подключаем по запросу отдельно.' },
          },
          {
            '@type': 'Question',
            name: 'Как Telegram-бот помогает барбершопу?',
            acceptedAnswer: { '@type': 'Answer', text: 'Клиент выбирает барбера, услугу и время в Telegram — запись мгновенно попадает в YCLIENTS. Мужчины не звонят, они пишут или бронируют онлайн.' },
          },
          {
            '@type': 'Question',
            name: 'Подходит ли продвижение барбершопу с несколькими мастерами?',
            acceptedAnswer: { '@type': 'Answer', text: 'Да. YCLIENTS и Telegram-бот поддерживают запись к конкретному барберу с отображением расписания каждого мастера.' },
          },
        ],
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://bugaev-web.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Услуги', item: 'https://bugaev-web.ru/uslugi' },
          { '@type': 'ListItem', position: 3, name: 'Продвижение барбершопа', item: 'https://bugaev-web.ru/barbershop' },
        ],
      }),
    },
  ],
})
</script>
