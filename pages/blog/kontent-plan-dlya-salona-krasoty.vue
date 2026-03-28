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
          <span style="color: var(--ink);">Контент-план для салона красоты</span>
        </nav>

        <div class="grid lg:grid-cols-[1fr_300px] gap-16 items-start">
          <article>

            <header style="margin-bottom: 48px;">
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; flex-wrap: wrap;">
                <span class="badge">SMM</span>
                <span style="color: var(--ink-3); font-size: 0.8rem; font-family: 'Syne Mono', monospace;">15 января 2026</span>
                <span style="color: var(--ink-3); font-size: 0.8rem; font-family: 'Syne Mono', monospace;">· 8 мин чтения</span>
              </div>
              <h1 style="font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(1.75rem, 4vw, 2.8rem); line-height: 1.1; color: var(--ink); letter-spacing: -0.03em; margin-bottom: 20px;">
                Контент-план для салона красоты: структура, шаблон и пример на месяц
              </h1>
              <p style="font-size: 1.1rem; color: var(--ink-3); line-height: 1.7; max-width: 680px;">
                Как составить контент-план для Instagram салона красоты: какие типы постов нужны, в каком соотношении, как расставить по дням и что делать когда «нет идей». Готовый шаблон на месяц.
              </p>
            </header>

            <div class="h-px mb-10" style="background: var(--border);" />

            <div class="article-body">

              <p>Контент-план — это расписание публикаций на неделю или месяц вперёд: что, когда и в каком формате выходит в Instagram. Без него SMM-ведение превращается в хаотичные посты «когда есть время», что убивает алгоритмы и охваты.</p>

              <h2 id="zachem">Зачем нужен контент-план</h2>

              <p>Три главные причины делать план наперёд:</p>

              <ul>
                <li><strong>Регулярность.</strong> Алгоритм Instagram и Яндекса ценит постоянство. Аккаунт, который публикует 4 раза в неделю стабильно, получает в 2–3 раза больший охват, чем тот, который выкладывает хаотично.</li>
                <li><strong>Баланс типов контента.</strong> Без плана большинство салонов публикуют только фото работ. Алгоритм перестаёт их продвигать: «всё одинаковое». План помогает чередовать форматы.</li>
                <li><strong>Экономия времени.</strong> Когда план есть, вы не думаете «что выложить сегодня» — просто берёте следующий пункт. 30 минут планирования в начале месяца экономят 3–4 часа в течение него.</li>
              </ul>

              <h2 id="vidy-kontenta">Виды контента для салона красоты</h2>

              <p>Прежде чем составлять план, нужно знать, из чего он состоит. Для бьюти-бизнеса работают 5 типов контента:</p>

              <ul>
                <li><strong>Портфолио (работы).</strong> Фото и видео результатов: маникюр, стрижки, косметологические процедуры. До/после — самый вовлекающий формат. Люди видят результат и хотят такой же.</li>
                <li><strong>Экспертный контент.</strong> Полезные советы: «как ухаживать за маникюром дома», «почему шеллак держится меньше 2 недель», «5 признаков, что вам нужна чистка лица». Такие посты сохраняют и пересылают.</li>
                <li><strong>Продающий контент.</strong> Акции, специальные предложения, анонсы новых услуг. «Только в феврале маникюр с педикюром — 4000 ₽ вместо 5000 ₽».</li>
                <li><strong>Закулисье.</strong> Подготовка к работе, рабочий день мастера, новое оборудование, обучение — делает аккаунт живым и вызывает доверие.</li>
                <li><strong>Социальные доказательства.</strong> Отзывы клиентов (текст или видео), благодарности, скриншоты с Google-карт. Продают лучше любой рекламы.</li>
              </ul>

              <h2 id="struktura">Структура: соотношение типов постов</h2>

              <p>Оптимальное соотношение для салона красоты в Instagram, которое работает у наших клиентов:</p>

              <ul>
                <li><strong>50% — портфолио и результаты работ.</strong> Основа аккаунта. Именно за этим подписываются.</li>
                <li><strong>20% — экспертный контент.</strong> Строит авторитет, собирает сохранения, привлекает новых подписчиков через рекомендации.</li>
                <li><strong>15% — социальные доказательства.</strong> Отзывы переводят подписчиков в клиентов.</li>
                <li><strong>10% — акции и продажи.</strong> Прямые предложения записаться. Если их больше 10–15% — аккаунт становится «рекламным» и теряет живую аудиторию.</li>
                <li><strong>5% — закулисье.</strong> Личность мастера или команды, атмосфера салона.</li>
              </ul>

              <h2 id="shablon">Шаблон контент-плана на месяц</h2>

              <p>При ритме 4 поста в неделю за месяц получается ~16–18 публикаций. Вот рабочая структура:</p>

              <p><strong>Неделя 1 (пример):</strong></p>
              <ul>
                <li>Пн — портфолио: лучшая работа недели (фото до/после)</li>
                <li>Ср — экспертный пост: «3 ошибки при выборе мастера маникюра»</li>
                <li>Пт — портфолио: подборка работ за неделю (карусель 5–8 фото)</li>
                <li>Вс — отзыв клиента + призыв записаться</li>
              </ul>

              <p><strong>Неделя 2:</strong></p>
              <ul>
                <li>Пн — акция: «Скидка 15% на маникюр в будни до 14:00»</li>
                <li>Ср — портфолио: видео-рилс с процессом работы</li>
                <li>Пт — экспертный: «Как ухаживать за кожей зимой»</li>
                <li>Вс — закулисье: знакомство с мастером</li>
              </ul>

              <p>И так по циклу на 4 недели. В итоге каждую неделю выходит примерно по одному посту каждого типа.</p>

              <h2 id="primer">Пример готового расписания</h2>

              <p>Для ногтевой студии с одним мастером на январь:</p>

              <ul>
                <li>13 янв (пн) — фото нового дизайна, актуальный тренд февраля</li>
                <li>15 янв (ср) — «Почему гель-лак отслаивается раньше срока — 5 причин»</li>
                <li>17 янв (пт) — карусель работ за неделю</li>
                <li>20 янв (пн) — отзыв клиентки + свободные окна на неделю</li>
                <li>22 янв (ср) — видео: процесс nail-art</li>
                <li>24 янв (пт) — акция к 14 февраля: «Сердечный маникюр — специальный дизайн»</li>
                <li>27 янв (пн) — портфолио: лучший маникюр месяца</li>
                <li>29 янв (ср) — экспертный: уход за кутикулой дома</li>
                <li>31 янв (пт) — итоги месяца + благодарность клиентам</li>
              </ul>

              <h2 id="storisy">Отдельно: план для сторис</h2>

              <p>Сторис — это отдельный поток контента. Они должны выходить ежедневно или почти каждый день, но готовить их сложнее, чем посты.</p>

              <p><strong>Минимальный ежедневный набор сторис:</strong></p>
              <ul>
                <li>1–2 фото рабочего дня (клиент в кресле, руки мастера в процессе)</li>
                <li>Опрос или вопрос аудитории (раз в 2–3 дня)</li>
                <li>Свободные окна, если есть (в формате «есть место сегодня в 16:00 — пишите»)</li>
              </ul>

              <p>Сторис не нужно планировать детально — достаточно поставить напоминание «снять сторис» в начале и конце рабочего дня. 2 минуты в день, стабильный охват.</p>

              <h2 id="sovety">Советы по экономии времени</h2>

              <ul>
                <li><strong>Снимайте сразу много.</strong> Раз в неделю — 15–20 фото работ за один «фотосеанс». Это даёт материал на 2–3 недели вперёд.</li>
                <li><strong>Используйте шаблоны в Canva.</strong> Создайте 3–5 брендированных шаблонов карточек: для портфолио, для экспертных постов, для акций. Меняете только фото и текст — минута на пост.</li>
                <li><strong>Пишите тексты блоком.</strong> Раз в неделю садитесь и пишете тексты для всех постов следующей недели. Это быстрее, чем придумывать каждый день.</li>
                <li><strong>Планировщик.</strong> Пользуйтесь SMMplanner или аналогами — загружаете контент на неделю вперёд, он публикуется автоматически.</li>
              </ul>

              <p>Если всё это занимает слишком много времени — <NuxtLink to="/smm-salon-krasoty">Бугаев Веб берёт ведение Instagram под ключ</NuxtLink>: мы составляем контент-план, пишем тексты, публикуем, отвечаем на директ. Вы только присылаете фото работ раз в неделю.</p>

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
              <h3 style="font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.5rem; color: #fff; margin-bottom: 8px;">Контент-план — это работа профессионала</h3>
              <p style="color: rgba(255,255,255,0.5); margin-bottom: 24px; font-size: 0.9rem;">Мы делаем контент-план и ведём Instagram для салонов красоты под ключ. Входит в абонемент 50 000 ₽/мес.</p>
              <NuxtLink to="/#form" class="btn-accent">Делегировать контент</NuxtLink>
            </div>

          </article>

          <aside style="position: sticky; top: 100px;">
            <div style="background: var(--surface-warm); border-radius: 16px; padding: 28px; margin-bottom: 24px;">
              <h3 style="font-weight: 700; font-size: 0.9rem; margin-bottom: 16px; color: var(--ink);">Содержание</h3>
              <nav>
                <ol style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px;">
                  <li><a href="#zachem" style="color: var(--ink-3); text-decoration: none; font-size: 0.85rem; line-height: 1.4;">1. Зачем нужен план</a></li>
                  <li><a href="#vidy-kontenta" style="color: var(--ink-3); text-decoration: none; font-size: 0.85rem; line-height: 1.4;">2. Виды контента</a></li>
                  <li><a href="#struktura" style="color: var(--ink-3); text-decoration: none; font-size: 0.85rem; line-height: 1.4;">3. Соотношение типов</a></li>
                  <li><a href="#shablon" style="color: var(--ink-3); text-decoration: none; font-size: 0.85rem; line-height: 1.4;">4. Шаблон на месяц</a></li>
                  <li><a href="#primer" style="color: var(--ink-3); text-decoration: none; font-size: 0.85rem; line-height: 1.4;">5. Пример расписания</a></li>
                  <li><a href="#storisy" style="color: var(--ink-3); text-decoration: none; font-size: 0.85rem; line-height: 1.4;">6. План для сторис</a></li>
                  <li><a href="#sovety" style="color: var(--ink-3); text-decoration: none; font-size: 0.85rem; line-height: 1.4;">7. Советы по времени</a></li>
                </ol>
              </nav>
            </div>

            <div style="background: var(--accent-dim); border: 1px solid rgba(143,175,138,0.22); border-radius: 16px; padding: 28px;">
              <h3 style="font-weight: 700; font-size: 0.9rem; margin-bottom: 8px; color: var(--ink);">Нужна помощь с контентом?</h3>
              <p style="color: var(--ink-3); font-size: 0.8rem; line-height: 1.6; margin-bottom: 16px;">Делаем контент-план и ведём Instagram под ключ — входит в абонемент.</p>
              <NuxtLink to="/#form" class="btn-primary" style="width: 100%; justify-content: center; display: flex;">Оставить заявку</NuxtLink>
            </div>

            <div style="margin-top: 24px; background: var(--surface-warm); border-radius: 16px; padding: 28px;">
              <h3 style="font-weight: 700; font-size: 0.9rem; margin-bottom: 16px; color: var(--ink);">Читать также</h3>
              <div style="display: flex; flex-direction: column; gap: 12px;">
                <NuxtLink to="/blog/kak-vesti-instagram-dlya-salona-krasoty" style="color: var(--ink-3); text-decoration: none; font-size: 0.85rem; line-height: 1.4; display: flex; align-items: flex-start; gap: 8px;">
                  <span style="flex-shrink: 0; color: var(--accent);">→</span>Как вести Instagram для салона
                </NuxtLink>
                <NuxtLink to="/blog/skolko-stoit-smm-dlya-salona-krasoty" style="color: var(--ink-3); text-decoration: none; font-size: 0.85rem; line-height: 1.4; display: flex; align-items: flex-start; gap: 8px;">
                  <span style="flex-shrink: 0; color: var(--accent);">→</span>Сколько стоит SMM для салона
                </NuxtLink>
                <NuxtLink to="/smm-salon-krasoty" style="color: var(--ink-3); text-decoration: none; font-size: 0.85rem; line-height: 1.4; display: flex; align-items: flex-start; gap: 8px;">
                  <span style="flex-shrink: 0; color: var(--accent);">→</span>SMM для салона красоты — услуга
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
  title: 'Контент-план для салона красоты — шаблон и пример на месяц | Бугаев Веб',
  description: 'Как составить контент-план для салона красоты в Instagram: структура, типы постов, шаблон на месяц, расписание публикаций. Пример от SMM-специалиста по бьюти-бизнесу.',
  ogTitle: 'Контент-план для салона красоты — шаблон на месяц',
  ogDescription: 'Структура, типы постов, шаблон и готовое расписание публикаций для Instagram салона красоты.',
  ogUrl: 'https://bugaev-web.ru/blog/kontent-plan-dlya-salona-krasoty',
  ogType: 'article',
  ogLocale: 'ru_RU',
  ogSiteName: 'Бугаев Веб',
  ogImage: 'https://bugaev-web.ru/og-image.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Контент-план для салона красоты — Бугаев Веб',
  twitterDescription: 'Шаблон контент-плана для Instagram салона красоты на месяц.',
  twitterImage: 'https://bugaev-web.ru/og-image.jpg',
})

useHead({
  htmlAttrs: { lang: 'ru' },
  link: [{ rel: 'canonical', href: 'https://bugaev-web.ru/blog/kontent-plan-dlya-salona-krasoty' }],
})

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Контент-план для салона красоты: структура, шаблон и пример на месяц",
      "description": "Как составить контент-план для Instagram салона красоты: типы постов, соотношение форматов, шаблон на месяц.",
      "author": { "@type": "Person", "name": "Бугаев Дмитрий", "url": "https://bugaev-web.ru/#founder" },
      "publisher": { "@id": "https://bugaev-web.ru/#business" },
      "datePublished": "2026-01-15",
      "dateModified": "2026-01-15",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://bugaev-web.ru/blog/kontent-plan-dlya-salona-krasoty" },
      "url": "https://bugaev-web.ru/blog/kontent-plan-dlya-salona-krasoty",
      "inLanguage": "ru-RU",
      "about": { "@type": "Thing", "name": "Контент-план для Instagram салона красоты" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://bugaev-web.ru/" },
        { "@type": "ListItem", "position": 2, "name": "Блог", "item": "https://bugaev-web.ru/blog" },
        { "@type": "ListItem", "position": 3, "name": "Контент-план для салона красоты", "item": "https://bugaev-web.ru/blog/kontent-plan-dlya-salona-krasoty" }
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
