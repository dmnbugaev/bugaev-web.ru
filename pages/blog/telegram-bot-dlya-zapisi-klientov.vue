<template>
  <div style="background: var(--surface);">
    <Header />
    <main class="pt-28 pb-20">
      <div class="section-container">

        <nav aria-label="Хлебные крошки" style="margin-bottom: 32px; font-size: 0.8rem; color: var(--ink-3); display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
          <NuxtLink to="/" style="color: var(--ink-3); text-decoration: none;">Главная</NuxtLink>
          <span>→</span>
          <NuxtLink to="/blog" style="color: var(--ink-3); text-decoration: none;">Блог</NuxtLink>
          <span>→</span>
          <span style="color: var(--ink);">Telegram-бот для записи клиентов</span>
        </nav>

        <div class="grid lg:grid-cols-[1fr_300px] gap-16 items-start">
          <article>

            <header style="margin-bottom: 48px;">
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; flex-wrap: wrap;">
                <span class="badge">Автоматизация</span>
                <span style="color: var(--ink-3); font-size: 0.8rem; font-family: 'Syne Mono', monospace;">19 марта 2026</span>
                <span style="color: var(--ink-3); font-size: 0.8rem; font-family: 'Syne Mono', monospace;">· 5 мин чтения</span>
              </div>
              <h1 style="font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(1.75rem, 4vw, 2.8rem); line-height: 1.1; color: var(--ink); letter-spacing: -0.03em; margin-bottom: 20px;">
                Telegram-бот для записи клиентов: как работает и что даёт салону
              </h1>
              <p style="font-size: 1.1rem; color: var(--ink-3); line-height: 1.7; max-width: 680px;">
                Разбираем схему работы Telegram-бота для онлайн-записи: что умеет, какие цифры даёт на практике, во сколько обходится и зачем интегрировать с CRM YCLIENTS.
              </p>
            </header>

            <div class="h-px mb-10" style="background: var(--border);" />

            <div class="article-body">

              <p>Telegram-бот для онлайн-записи — не модная игрушка, а практический инструмент с измеримым результатом. Клиент записывается в 23:00, не дожидаясь открытия, а администратор утром видит заполненное расписание вместо пустого. Разберём, как именно это работает.</p>

              <h2 id="kak-rabotaet">Как работает Telegram-бот для записи</h2>

              <p>Схема простая. Клиент видит ссылку на бота — в шапке Instagram, на сайте, в сторисах, на визитке. Нажимает → попадает в диалог с ботом в Telegram.</p>

              <p><strong>Сценарий записи выглядит так:</strong></p>
              <ul>
                <li>Бот приветствует и предлагает выбрать услугу (маникюр, педикюр, уход за бровями — ваш список)</li>
                <li>После выбора услуги — выбор мастера (если их несколько) или сразу выбор даты</li>
                <li>Бот показывает только свободные слоты из вашего расписания в YCLIENTS</li>
                <li>Клиент выбирает удобное время → подтверждение сразу</li>
                <li>Запись появляется в CRM автоматически, администратор получает уведомление</li>
              </ul>

              <p>Весь процесс занимает 1–2 минуты. Никаких звонков, ожидания ответа в директе, сложных форм с кнопкой «отправить».</p>

              <h2 id="vozmozhnosti">Что умеет бот помимо записи</h2>

              <p>Запись — только базовая функция. Хорошо настроенный бот делает значительно больше:</p>

              <ul>
                <li><strong>Показывает прайс-лист</strong> — клиент уточняет цену прямо в боте, не беспокоя администратора</li>
                <li><strong>Отвечает на FAQ</strong> — адрес, парковка, как добраться, что взять с собой на первый визит</li>
                <li><strong>Отправляет напоминания</strong> — автоматически за 24 часа и за 2 часа до визита</li>
                <li><strong>Собирает отзывы</strong> — через день после визита бот пишет: «Как прошёл ваш маникюр? Оцените мастера»</li>
                <li><strong>Предлагает записаться снова</strong> — через 3–4 недели после маникюра или другой процедуры</li>
                <li><strong>Ведёт рассылки</strong> — акции, новые услуги, специальные предложения по базе клиентов</li>
              </ul>

              <h2 id="tsifry">Реальные цифры наших клиентов</h2>

              <p>Вот что происходит у клиентов Бугаев Веб после подключения бота:</p>

              <ul>
                <li><strong>30–40% новых записей</strong> идут через бота уже в первый месяц</li>
                <li><strong>Неявки снижаются</strong> с 20–25% до 5–8% после внедрения автонапоминаний</li>
                <li><strong>8–12 «ночных» записей</strong> в месяц — те, которые приходят после 20:00, когда администратор не работает</li>
                <li><strong>+25–35% повторных визитов</strong> благодаря автоматическим напоминаниям «пора записаться снова»</li>
              </ul>

              <p>Конкретный пример: ногтевая студия в Бутово. До бота — 3–4 неявки в неделю, запись заполнена на 65%. После бота с напоминаниями — 0–1 неявка в неделю, запись заполнена на 88%.</p>

              <h2 id="napominaniya">Автонапоминания и снижение неявок</h2>

              <p>Неявка — это не просто потерянные деньги за конкретную запись. Это ещё и потерянное место, которое мог занять другой клиент. При среднем чеке 2500 ₽ и 4 неявках в неделю — это 10 000 ₽ в неделю или 40 000 ₽ в месяц теряет салон.</p>

              <p>Система напоминаний работает так:</p>
              <ul>
                <li><strong>За 24 часа</strong> — информационное напоминание с адресом и временем</li>
                <li><strong>За 2–3 часа</strong> — напоминание с кнопкой «подтвердить визит» или «перенести»</li>
                <li><strong>Если нажата «перенести»</strong> — бот сразу предлагает выбрать другую дату из свободных слотов, а освободившееся место становится доступным</li>
              </ul>

              <p>Кнопка переноса — критически важная деталь. Без неё клиент просто не приходит молча. С кнопкой — 60–70% тех, кто хотел отменить, выбирают другую дату вместо отмены.</p>

              <h2 id="integratsiya">Интеграция с CRM YCLIENTS</h2>

              <p>Бот без CRM — это бот, который ведёт отдельный список записей, не связанный с расписанием мастеров. Это создаёт путаницу и накладки.</p>

              <p>Правильная схема: бот интегрирован с <NuxtLink to="/crm-yclients">CRM YCLIENTS</NuxtLink>. Тогда:</p>
              <ul>
                <li>Бот показывает клиенту только реально свободные слоты из расписания YCLIENTS</li>
                <li>После записи через бота — запись автоматически появляется в CRM</li>
                <li>Администратор видит полную картину в одном месте: и онлайн-запись, и записи по телефону</li>
                <li>Накладки исключены</li>
              </ul>

              <p>Настройка такой интеграции входит в абонемент Бугаев Веб — вы получаете единую систему, а не лоскутные решения от разных подрядчиков.</p>

              <h2 id="stoimost">Сколько стоит Telegram-бот для салона красоты</h2>

              <p>На рынке разработка Telegram-бота с базовым функционалом (запись, напоминания, прайс) стоит <strong>30 000–60 000 ₽</strong> единовременно. Плюс ежемесячная поддержка — 5 000–15 000 ₽/мес. Итого за первый год: 90 000–240 000 ₽.</p>

              <p>В абонементе <NuxtLink to="/telegram-bot-zapis">Бугаев Веб</NuxtLink> Telegram-бот входит в пакет вместе с сайтом, SMM и CRM за 50 000 ₽/мес — без единовременного взноса, без отдельной оплаты поддержки.</p>

            </div>

            <div class="h-px my-12" style="background: var(--border);" />

            <div style="display: flex; align-items: center; gap: 16px; padding: 24px; background: var(--surface-warm); border-radius: 16px; margin-bottom: 32px;">
              <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--accent); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
                  <path d="M4 14L9 3L14 14H4Z" fill="var(--ink)" />
                  <circle cx="9" cy="9.5" r="1.8" fill="var(--ink)" />
                </svg>
              </div>
              <div>
                <strong style="display: block; color: var(--ink); font-size: 0.9rem;">Бугаев Дмитрий</strong>
                <span style="color: var(--ink-3); font-size: 0.8rem;">Основатель Бугаев Веб — digital-продвижение для бьюти-бизнеса</span>
              </div>
            </div>

            <div style="background: var(--ink); border-radius: 20px; padding: 40px; text-align: center;">
              <h3 style="font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.5rem; color: #fff; margin-bottom: 8px;">Клиенты записываются — даже когда вы спите</h3>
              <p style="color: rgba(255,255,255,0.5); margin-bottom: 24px; font-size: 0.9rem;">Telegram-бот входит в абонемент Бугаев Веб. 50 000 ₽/мес — всё включено.</p>
              <NuxtLink to="/#form" class="btn-accent">Подключить бота</NuxtLink>
            </div>

          </article>

          <aside style="position: sticky; top: 100px;">
            <div style="background: var(--surface-warm); border-radius: 16px; padding: 28px; margin-bottom: 24px;">
              <h3 style="font-weight: 700; font-size: 0.9rem; margin-bottom: 16px; color: var(--ink);">Содержание</h3>
              <nav>
                <ol style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px;">
                  <li><a href="#kak-rabotaet" style="color: var(--ink-3); text-decoration: none; font-size: 0.85rem; line-height: 1.4;">1. Как работает бот</a></li>
                  <li><a href="#vozmozhnosti" style="color: var(--ink-3); text-decoration: none; font-size: 0.85rem; line-height: 1.4;">2. Что умеет бот</a></li>
                  <li><a href="#tsifry" style="color: var(--ink-3); text-decoration: none; font-size: 0.85rem; line-height: 1.4;">3. Реальные цифры</a></li>
                  <li><a href="#napominaniya" style="color: var(--ink-3); text-decoration: none; font-size: 0.85rem; line-height: 1.4;">4. Напоминания и неявки</a></li>
                  <li><a href="#integratsiya" style="color: var(--ink-3); text-decoration: none; font-size: 0.85rem; line-height: 1.4;">5. Интеграция с YCLIENTS</a></li>
                  <li><a href="#stoimost" style="color: var(--ink-3); text-decoration: none; font-size: 0.85rem; line-height: 1.4;">6. Сколько стоит</a></li>
                </ol>
              </nav>
            </div>

            <div style="background: var(--accent-dim); border: 1px solid rgba(143,175,138,0.22); border-radius: 16px; padding: 28px;">
              <h3 style="font-weight: 700; font-size: 0.9rem; margin-bottom: 8px; color: var(--ink);">Нужен бот для салона?</h3>
              <p style="color: var(--ink-3); font-size: 0.8rem; line-height: 1.6; margin-bottom: 16px;">Входит в абонемент вместе с сайтом, SMM и CRM. Один платёж.</p>
              <NuxtLink to="/#form" class="btn-primary" style="width: 100%; justify-content: center; display: flex;">Оставить заявку</NuxtLink>
            </div>

            <div style="margin-top: 24px; background: var(--surface-warm); border-radius: 16px; padding: 28px;">
              <h3 style="font-weight: 700; font-size: 0.9rem; margin-bottom: 16px; color: var(--ink);">Читать также</h3>
              <div style="display: flex; flex-direction: column; gap: 12px;">
                <NuxtLink to="/telegram-bot-zapis" style="color: var(--ink-3); text-decoration: none; font-size: 0.85rem; line-height: 1.4; display: flex; align-items: flex-start; gap: 8px;">
                  <span style="flex-shrink: 0; color: var(--accent);">→</span>Telegram-бот для записи — услуга
                </NuxtLink>
                <NuxtLink to="/blog/kak-uvelichit-zapis-v-salone-krasoty" style="color: var(--ink-3); text-decoration: none; font-size: 0.85rem; line-height: 1.4; display: flex; align-items: flex-start; gap: 8px;">
                  <span style="flex-shrink: 0; color: var(--accent);">→</span>Как увеличить запись в салоне
                </NuxtLink>
                <NuxtLink to="/crm-yclients" style="color: var(--ink-3); text-decoration: none; font-size: 0.85rem; line-height: 1.4; display: flex; align-items: flex-start; gap: 8px;">
                  <span style="flex-shrink: 0; color: var(--accent);">→</span>Настройка CRM YCLIENTS
                </NuxtLink>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
    <Footer />
    <component :is="'script'" type="application/ld+json" v-html="schemaJson" />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Telegram-бот для записи клиентов в салон красоты — как работает | Бугаев Веб',
  description: 'Как работает Telegram-бот для онлайн-записи клиентов в салон красоты: схема работы, что умеет, реальные цифры снижения неявок, интеграция с CRM YCLIENTS.',
  ogTitle: 'Telegram-бот для записи клиентов — как работает и что даёт',
  ogDescription: 'Разбор Telegram-бота для онлайн-записи: схема работы, цифры, интеграция с YCLIENTS.',
  ogUrl: 'https://bugaev-web.ru/blog/telegram-bot-dlya-zapisi-klientov',
  ogType: 'article',
  ogLocale: 'ru_RU',
  ogSiteName: 'Бугаев Веб',
  ogImage: 'https://bugaev-web.ru/og-image.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Telegram-бот для записи в салон красоты — Бугаев Веб',
  twitterDescription: 'Как работает Telegram-бот для онлайн-записи. Реальные цифры.',
  twitterImage: 'https://bugaev-web.ru/og-image.jpg',
})

useHead({
  htmlAttrs: { lang: 'ru' },
  link: [{ rel: 'canonical', href: 'https://bugaev-web.ru/blog/telegram-bot-dlya-zapisi-klientov' }],
})

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Telegram-бот для записи клиентов: как работает и что даёт салону",
      "description": "Схема работы Telegram-бота для онлайн-записи в салон красоты, реальные цифры, интеграция с CRM YCLIENTS.",
      "author": { "@type": "Person", "name": "Бугаев Дмитрий", "url": "https://bugaev-web.ru/#founder" },
      "publisher": { "@id": "https://bugaev-web.ru/#business" },
      "datePublished": "2026-03-19",
      "dateModified": "2026-03-19",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://bugaev-web.ru/blog/telegram-bot-dlya-zapisi-klientov" },
      "url": "https://bugaev-web.ru/blog/telegram-bot-dlya-zapisi-klientov",
      "inLanguage": "ru-RU",
      "about": { "@type": "Thing", "name": "Telegram-бот для онлайн-записи клиентов" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://bugaev-web.ru/" },
        { "@type": "ListItem", "position": 2, "name": "Блог", "item": "https://bugaev-web.ru/blog" },
        { "@type": "ListItem", "position": 3, "name": "Telegram-бот для записи клиентов", "item": "https://bugaev-web.ru/blog/telegram-bot-dlya-zapisi-klientov" }
      ]
    }
  ]
}
const schemaJson = JSON.stringify(schema)
</script>

<style scoped>
.article-body { font-size: 1rem; line-height: 1.8; color: var(--ink-2); max-width: 720px; }
.article-body p { margin-bottom: 1.25rem; }
.article-body h2 { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.5rem; color: var(--ink); letter-spacing: -0.02em; margin-top: 2.5rem; margin-bottom: 1rem; line-height: 1.2; }
.article-body ul, .article-body ol { padding-left: 1.5rem; margin-bottom: 1.25rem; }
.article-body li { margin-bottom: 0.5rem; }
.article-body strong { color: var(--ink); font-weight: 700; }
.article-body a { color: var(--accent-text); text-decoration: underline; text-underline-offset: 3px; }
.article-body a:hover { color: var(--ink); }
</style>
