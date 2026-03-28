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
          <span style="color: var(--ink);">YCLIENTS для салона красоты</span>
        </nav>

        <div class="grid lg:grid-cols-[1fr_300px] gap-16 items-start">
          <article>

            <header style="margin-bottom: 48px;">
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; flex-wrap: wrap;">
                <span class="badge">CRM</span>
                <span style="color: var(--ink-3); font-size: 0.8rem; font-family: 'Syne Mono', monospace;">30 января 2026</span>
                <span style="color: var(--ink-3); font-size: 0.8rem; font-family: 'Syne Mono', monospace;">· 7 мин чтения</span>
              </div>
              <h1 style="font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(1.75rem, 4vw, 2.8rem); line-height: 1.1; color: var(--ink); letter-spacing: -0.03em; margin-bottom: 20px;">
                YCLIENTS для салона красоты: как настроить CRM с нуля в 2026 году
              </h1>
              <p style="font-size: 1.1rem; color: var(--ink-3); line-height: 1.7; max-width: 680px;">
                Пошаговое руководство по настройке CRM YCLIENTS для салона красоты: услуги, мастера, расписание, клиентская база, автонапоминания, аналитика и интеграция с Telegram-ботом.
              </p>
            </header>

            <div class="h-px mb-10" style="background: var(--border);" />

            <div class="article-body">

              <p>YCLIENTS — самая популярная CRM для бьюти-бизнеса в России. По данным компании, её используют более 25 000 салонов красоты, ногтевых студий, барбершопов и косметологических кабинетов. Но большинство используют лишь 20–30% её возможностей. Разберём, как настроить систему правильно с самого начала.</p>

              <h2 id="chto-takoe">Что такое YCLIENTS и зачем это салону</h2>

              <p>YCLIENTS — это облачная CRM-система, которая объединяет в одном месте:</p>

              <ul>
                <li>Онлайн-запись клиентов через сайт, бота и виджет</li>
                <li>Расписание всех мастеров и кабинетов</li>
                <li>Клиентскую базу с историей визитов</li>
                <li>Кассу, финансовый учёт, аналитику выручки</li>
                <li>Автоматические напоминания клиентам</li>
                <li>Рассылки по базе</li>
                <li>Складской учёт расходных материалов</li>
              </ul>

              <p>До YCLIENTS большинство салонов вели запись в бумажном журнале или в таблице Excel. Это означает: потерянные записи, накладки в расписании, никакой аналитики и ручные напоминания через WhatsApp. YCLIENTS закрывает все эти проблемы.</p>

              <h2 id="nastroyka-bazy">Настройка базы: услуги, мастера, расписание</h2>

              <p>Первый шаг после регистрации — заполнить справочники. Без этого система не работает.</p>

              <p><strong>Услуги.</strong> Создайте каждую услугу с точным названием, ценой и продолжительностью. Продолжительность особенно важна: система блокирует слот в расписании именно на это время. Если маникюр занимает 90 минут, укажите 90, не 60 — иначе будут накладки.</p>

              <p><strong>Мастера.</strong> Для каждого мастера заполните: имя, фото (влияет на конверсию онлайн-записи), список услуг (только те, что реально делает), рабочие дни и часы. Укажите перерывы между записями — время на уборку рабочего места.</p>

              <p><strong>Расписание.</strong> Настройте шаблоны рабочих недель для каждого мастера. Укажите праздничные нерабочие дни. Это избавит от ручной настройки каждой недели.</p>

              <p><strong>Онлайн-запись.</strong> В настройках активируйте онлайн-запись через виджет YCLIENTS — его можно вставить на сайт. Дополнительно — подключите интеграцию с <NuxtLink to="/telegram-bot-zapis">Telegram-ботом</NuxtLink> для удобной записи прямо в мессенджере.</p>

              <h2 id="klientskaya-baza">Клиентская база и история визитов</h2>

              <p>Клиентская база в YCLIENTS — это актив, который растёт с каждым визитом. Через год работы у вас будет база из 500–1000 клиентов с полной историей: что делали, у какого мастера, как часто ходят, какой средний чек.</p>

              <p><strong>Что важно настроить в карточке клиента:</strong></p>
              <ul>
                <li>Имя и контакт (телефон или Telegram) — для напоминаний и рассылок</li>
                <li>Источник привлечения — Instagram, Google, сарафан, реклама. Через 3 месяца будет видно, какой канал даёт лучших клиентов</li>
                <li>Заметки мастера — аллергии на материалы, предпочтения, особенности</li>
                <li>Тег лояльности — «постоянный», «VIP», «новый»</li>
              </ul>

              <p>Эти данные позволяют делать персональные предложения: «Мария, вы обычно приходите каждые 3 недели. Напоминаем, что в эту пятницу есть место у Анны».</p>

              <h2 id="napominaniya">Автоматические напоминания</h2>

              <p>Это самая быстроокупаемая функция YCLIENTS. Настраивается один раз и работает годами.</p>

              <p><strong>Обязательные напоминания:</strong></p>
              <ul>
                <li>За 24 часа до визита — SMS или WhatsApp: «Ждём вас завтра в 14:00 на маникюр к Анне. Студия ПримерНейл, ул. Примерная, 5»</li>
                <li>За 2 часа до визита — краткое напоминание с адресом</li>
                <li>После визита (через 1–2 дня) — запрос отзыва: «Как прошёл ваш визит? Оставьте отзыв в Google — это помогает нам стать лучше»</li>
              </ul>

              <p><strong>Напоминание о повторной записи:</strong> через N дней после визита (для маникюра — 21–28 дней, для чистки лица — 28–35 дней): «Прошло 3 недели с вашего последнего маникюра. Пора записаться снова? Выберите удобное время».</p>

              <p>Конверсия таких напоминаний в запись — 25–40% при правильной формулировке.</p>

              <h2 id="analitika">Финансовая аналитика</h2>

              <p>YCLIENTS собирает финансовую статистику автоматически. В разделе «Аналитика» доступны отчёты:</p>

              <ul>
                <li><strong>Выручка по дням, неделям, месяцам.</strong> Видно, в какие дни пик, в какие — спад. Спадные дни — кандидаты для акций.</li>
                <li><strong>Выручка по мастерам.</strong> Кто приносит больше дохода, кто загружен меньше. Основа для справедливой системы мотивации.</li>
                <li><strong>Популярность услуг.</strong> Что чаще всего заказывают, какие услуги маржинальнее.</li>
                <li><strong>Новые vs повторные клиенты.</strong> Если доля повторных клиентов ниже 40% — проблема с удержанием, нужна работа с базой.</li>
                <li><strong>Источники записей.</strong> Через что записываются: телефон, сайт, бот, Instagram.</li>
              </ul>

              <p>Смотрите эти отчёты раз в месяц — и принимайте решения на основе данных, а не ощущений.</p>

              <h2 id="integratsiya">Интеграция с сайтом и Telegram-ботом</h2>

              <p>YCLIENTS работает в связке с другими инструментами:</p>

              <ul>
                <li><strong>Виджет на сайте.</strong> Кнопка «Записаться онлайн» на <NuxtLink to="/sait-salon-krasoty">сайте салона</NuxtLink> открывает форму записи YCLIENTS прямо на странице. Клиент выбирает услугу, мастера и время без перехода на сторонние сервисы.</li>
                <li><strong>Telegram-бот.</strong> Интеграция с YCLIENTS позволяет боту показывать только реально свободные слоты из расписания. Запись через бота сразу появляется в CRM — никакой ручной работы.</li>
                <li><strong>Instagram.</strong> В шапке Instagram — ссылка на онлайн-запись через виджет или бота. Прямая конверсия из подписчика в клиента.</li>
              </ul>

              <h2 id="oshibki">Типичные ошибки при настройке</h2>

              <ul>
                <li><strong>Неточная продолжительность услуг.</strong> Мастер делает маникюр за 90 минут, а в системе стоит 60 — накладки гарантированы через неделю.</li>
                <li><strong>Не настроены напоминания.</strong> Самая частая ошибка: система подключена, но напоминания не настроены. Без них неявки остаются на прежнем уровне.</li>
                <li><strong>Не ведётся клиентская база.</strong> Администратор не спрашивает контакт — база не растёт. Через год — ни рассылок, ни сегментации.</li>
                <li><strong>Не смотрят аналитику.</strong> YCLIENTS собирает данные, но никто не открывает отчёты. Это как купить весы и не взвешиваться.</li>
                <li><strong>Персонал не обучен.</strong> Система настроена, но мастера и администратор не умеют ею пользоваться — результат нулевой.</li>
              </ul>

              <p>Именно поэтому настройка YCLIENTS в Бугаев Веб включает обучение персонала: администратора учим работать с записями и базой, мастеров — с расписанием и кассой. Подробнее: <NuxtLink to="/crm-yclients">настройка CRM YCLIENTS под ключ</NuxtLink>.</p>

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
              <h3 style="font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.5rem; color: #fff; margin-bottom: 8px;">Настройка YCLIENTS под ключ</h3>
              <p style="color: rgba(255,255,255,0.5); margin-bottom: 24px; font-size: 0.9rem;">Бугаев Веб настраивает CRM YCLIENTS под специфику вашего салона и обучает персонал. Входит в абонемент 50 000 ₽/мес.</p>
              <NuxtLink to="/#form" class="btn-accent">Настроить CRM</NuxtLink>
            </div>

          </article>

          <aside style="position: sticky; top: 100px;">
            <div style="background: var(--surface-warm); border-radius: 16px; padding: 28px; margin-bottom: 24px;">
              <h3 style="font-weight: 700; font-size: 0.9rem; margin-bottom: 16px; color: var(--ink);">Содержание</h3>
              <nav>
                <ol style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px;">
                  <li><a href="#chto-takoe" style="color: var(--ink-3); text-decoration: none; font-size: 0.85rem; line-height: 1.4;">1. Что такое YCLIENTS</a></li>
                  <li><a href="#nastroyka-bazy" style="color: var(--ink-3); text-decoration: none; font-size: 0.85rem; line-height: 1.4;">2. Услуги, мастера, расписание</a></li>
                  <li><a href="#klientskaya-baza" style="color: var(--ink-3); text-decoration: none; font-size: 0.85rem; line-height: 1.4;">3. Клиентская база</a></li>
                  <li><a href="#napominaniya" style="color: var(--ink-3); text-decoration: none; font-size: 0.85rem; line-height: 1.4;">4. Автонапоминания</a></li>
                  <li><a href="#analitika" style="color: var(--ink-3); text-decoration: none; font-size: 0.85rem; line-height: 1.4;">5. Аналитика</a></li>
                  <li><a href="#integratsiya" style="color: var(--ink-3); text-decoration: none; font-size: 0.85rem; line-height: 1.4;">6. Интеграция с сайтом и ботом</a></li>
                  <li><a href="#oshibki" style="color: var(--ink-3); text-decoration: none; font-size: 0.85rem; line-height: 1.4;">7. Типичные ошибки</a></li>
                </ol>
              </nav>
            </div>

            <div style="background: var(--accent-dim); border: 1px solid rgba(143,175,138,0.22); border-radius: 16px; padding: 28px;">
              <h3 style="font-weight: 700; font-size: 0.9rem; margin-bottom: 8px; color: var(--ink);">Настроить YCLIENTS под ключ?</h3>
              <p style="color: var(--ink-3); font-size: 0.8rem; line-height: 1.6; margin-bottom: 16px;">Входит в абонемент вместе с сайтом, ботом и SMM.</p>
              <NuxtLink to="/#form" class="btn-primary" style="width: 100%; justify-content: center; display: flex;">Оставить заявку</NuxtLink>
            </div>

            <div style="margin-top: 24px; background: var(--surface-warm); border-radius: 16px; padding: 28px;">
              <h3 style="font-weight: 700; font-size: 0.9rem; margin-bottom: 16px; color: var(--ink);">Читать также</h3>
              <div style="display: flex; flex-direction: column; gap: 12px;">
                <NuxtLink to="/crm-yclients" style="color: var(--ink-3); text-decoration: none; font-size: 0.85rem; line-height: 1.4; display: flex; align-items: flex-start; gap: 8px;">
                  <span style="flex-shrink: 0; color: var(--accent);">→</span>CRM YCLIENTS — услуга настройки
                </NuxtLink>
                <NuxtLink to="/blog/telegram-bot-dlya-zapisi-klientov" style="color: var(--ink-3); text-decoration: none; font-size: 0.85rem; line-height: 1.4; display: flex; align-items: flex-start; gap: 8px;">
                  <span style="flex-shrink: 0; color: var(--accent);">→</span>Telegram-бот для записи клиентов
                </NuxtLink>
                <NuxtLink to="/blog/kak-uvelichit-zapis-v-salone-krasoty" style="color: var(--ink-3); text-decoration: none; font-size: 0.85rem; line-height: 1.4; display: flex; align-items: flex-start; gap: 8px;">
                  <span style="flex-shrink: 0; color: var(--accent);">→</span>Как увеличить запись в салоне
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
  title: 'YCLIENTS для салона красоты — настройка CRM с нуля | Бугаев Веб',
  description: 'Как настроить CRM YCLIENTS для салона красоты с нуля: расписание мастеров, клиентская база, напоминания, аналитика, интеграция с сайтом и Telegram-ботом.',
  ogTitle: 'YCLIENTS для салона красоты — настройка CRM с нуля',
  ogDescription: 'Пошаговое руководство по настройке YCLIENTS: услуги, мастера, расписание, напоминания, аналитика.',
  ogUrl: 'https://bugaev-web.ru/blog/yclients-nastroyka-dlya-salona',
  ogType: 'article',
  ogLocale: 'ru_RU',
  ogSiteName: 'Бугаев Веб',
  ogImage: 'https://bugaev-web.ru/og-image.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'YCLIENTS для салона красоты — настройка CRM',
  twitterDescription: 'Пошаговое руководство по настройке CRM YCLIENTS с нуля.',
  twitterImage: 'https://bugaev-web.ru/og-image.jpg',
})

useHead({
  htmlAttrs: { lang: 'ru' },
  link: [{ rel: 'canonical', href: 'https://bugaev-web.ru/blog/yclients-nastroyka-dlya-salona' }],
})

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "YCLIENTS для салона красоты: как настроить CRM с нуля в 2026 году",
      "description": "Пошаговое руководство по настройке CRM YCLIENTS для салона красоты: услуги, расписание, клиентская база, напоминания, аналитика.",
      "author": { "@type": "Person", "name": "Бугаев Дмитрий", "url": "https://bugaev-web.ru/#founder" },
      "publisher": { "@id": "https://bugaev-web.ru/#business" },
      "datePublished": "2026-01-30",
      "dateModified": "2026-01-30",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://bugaev-web.ru/blog/yclients-nastroyka-dlya-salona" },
      "url": "https://bugaev-web.ru/blog/yclients-nastroyka-dlya-salona",
      "inLanguage": "ru-RU",
      "about": { "@type": "Thing", "name": "Настройка CRM YCLIENTS для салона красоты" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://bugaev-web.ru/" },
        { "@type": "ListItem", "position": 2, "name": "Блог", "item": "https://bugaev-web.ru/blog" },
        { "@type": "ListItem", "position": 3, "name": "YCLIENTS для салона красоты", "item": "https://bugaev-web.ru/blog/yclients-nastroyka-dlya-salona" }
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
