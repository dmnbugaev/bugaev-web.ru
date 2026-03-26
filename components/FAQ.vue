<template>
  <section id="faq" class="py-24" style="background: var(--surface-warm);">
    <div class="section-container">

      <!-- Header -->
      <div class="text-center mb-14">
        <div class="flex justify-center mb-5" data-animate="fade-down">
          <span class="badge">Вопросы и ответы</span>
        </div>
        <h2 class="section-title mb-3" data-animate="fade-up" data-delay="100">
          Отвечаем на частые вопросы
        </h2>
        <p class="section-subtitle" data-animate="fade-up" data-delay="200">
          Если не нашли ответ — напишите нам в Telegram или Max
        </p>
      </div>

      <!-- Accordion -->
      <div
        class="max-w-3xl mx-auto flex flex-col gap-2"
        data-animate="fade-up"
        data-delay="300"
      >
        <div
          v-for="(item, index) in faqItems"
          :key="item.question"
          class="overflow-hidden rounded-2xl transition-all duration-200"
          :style="openIndex === index
            ? 'background: var(--surface); border: 1px solid rgba(143,175,138,0.25); box-shadow: 0 2px 20px rgba(143,175,138,0.08);'
            : 'background: var(--surface); border: 1px solid var(--border);'"
        >
          <!-- Question button -->
          <button
            class="w-full flex items-center justify-between gap-4 p-6 text-left"
            @click="toggle(index)"
          >
            <div class="flex items-start gap-4 flex-1">
              <span
                class="flex-shrink-0 w-7 h-7 rounded-full mono text-xs font-bold flex items-center justify-center mt-0.5 transition-all duration-200"
                :style="openIndex === index
                  ? 'background: var(--ink); color: #FFFFFF;'
                  : 'background: var(--accent-dim); color: var(--accent-text);'"
              >
                {{ String(index + 1).padStart(2, '0') }}
              </span>
              <span
                class="font-semibold text-base leading-snug"
                style="color: var(--ink);"
              >
                {{ item.question }}
              </span>
            </div>

            <!-- Chevron -->
            <div
              class="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200"
              :style="openIndex === index
                ? 'background: var(--accent-dim); border: 1px solid rgba(143,175,138,0.22);'
                : 'background: var(--surface-warm); border: 1px solid var(--border);'"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                :style="{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }"
              >
                <path
                  d="M2 4.5l4.5 4 4.5-4"
                  :stroke="openIndex === index ? 'var(--accent-text)' : 'var(--ink-3)'"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </button>

          <!-- Answer -->
          <div
            class="accordion-content"
            :class="{ open: openIndex === index }"
          >
            <div class="px-6 pb-6 pt-0 pl-[4.25rem]">
              <div class="h-px mb-4" style="background: var(--border);" />
              <p class="text-sm leading-relaxed" style="color: var(--ink-3);">{{ item.answer }}</p>
              <ul v-if="item.points && item.points.length" class="mt-3 space-y-2">
                <li
                  v-for="point in item.points"
                  :key="point"
                  class="flex items-start gap-2 text-sm"
                  style="color: var(--ink-2);"
                >
                  <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5" style="background: var(--accent);" />
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Still have questions -->
      <div class="mt-10 text-center" data-animate="fade-up" data-delay="450">
        <p class="text-sm mb-3" style="color: var(--ink-3);">Остались вопросы?</p>
        <div class="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://t.me/bugaev_web"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-150"
            style="color: var(--ink);"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
            </svg>
            Задать вопрос в Telegram ↗
          </a>
          <a
            href="https://max.ru/join/hPzwZMH8FPTH8xvPLPpzqP2HnHyArReIQkqcP2E4U5Q"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-150"
            style="color: var(--ink);"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" />
            </svg>
            Написать в Max ↗
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const openIndex = ref<number | null>(0)
const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}

const faqItems = [
  {
    question: 'Как быстро появятся первые новые клиенты?',
    answer:   'Первые записи через Telegram-бот и сайт — в течение 2–4 недель после запуска. Рост в соцсетях и SEO-трафик из Google и Яндекса становятся заметны через 1–3 месяца. Точные прогнозы даём после бесплатного аудита вашего бизнеса.',
  },
  {
    question: 'Что конкретно входит в подписку и нет ли скрытых платежей?',
    answer:   'В подписку за 50 000 ₽/мес входит полный цифровой пакет без каких-либо скрытых доплат:',
    points: [
      'Сайт-визитка на Nuxt.js — разработка и поддержка',
      'Telegram-бот с автозаписью, напоминаниями и прогревом',
      'Ведение Instagram и Telegram-канала (посты, сторис)',
      'Настройка CRM YCLIENTS и интеграции',
      'Еженедельные отчёты и аналитика по заявкам',
      'Личный менеджер в Telegram (6 дней в неделю)',
      'Хостинг и домен включены',
    ],
  },
  {
    question: 'Работаете ли вы не только с салонами красоты?',
    answer:   'Да. Мы работаем с любым бьюти-бизнесом в Москве и Подмосковье: ногтевые студии, косметологические кабинеты, brow bar, лэш-студии, барбершопы, небольшие стоматологические клиники. Подход адаптируем под специфику каждой ниши — своя стратегия контента, свои целевые запросы для SEO.',
  },
  {
    question: 'А если у нас уже есть Instagram?',
    answer:   'Отлично — начнём с аудита того, что есть. Доработаем оформление профиля, выстроим контент-план и улучшим вовлечённость. Ничего не удаляем, всё только улучшаем. Если аккаунт ведётся нерегулярно — запустим систему постинга.',
  },
  {
    question: 'А если мы находимся не в центре Москвы?',
    answer:   'Большинство наших клиентов — салоны в спальных районах Москвы и Подмосковье: Митино, Бутово, Люблино, Химки, Подольск, Красногорск, Мытищи. Для таких локаций SEO и геопривязка работают особенно хорошо — конкуренция ниже, а запросы вроде «маникюр Митино» или «косметолог Химки» приносят горячих клиентов.',
  },
  {
    question: 'Чем это лучше, чем нанять штатного SMM-менеджера?',
    answer:   'Штатный SMM-менеджер закрывает только соцсети. Бугаев Веб — это сразу сайт, бот, CRM и соцсети. Средняя зарплата SMM в Москве — 60 000–80 000 ₽/мес только за посты. За 50 000 ₽ у нас вы получаете полноценный digital-отдел: разработчик сайта + SMM + bot-разработчик + CRM-специалист в одном пакете.',
  },
  {
    question: 'Как Telegram-бот помогает увеличить запись в салоне?',
    answer:   'Бот принимает записи 24/7 — клиент не ждёт, пока откроется салон или освободится администратор. Автоматические напоминания за 24 часа и за 2 часа до визита снижают неявки на 60–70%. Запись через бот удобнее звонка — у наших клиентов 30–40% новых записей идёт именно через бота.',
  },
  {
    question: 'А если у нас нет нормальных фото работ?',
    answer:   'Не проблема. Мы помогаем с техзаданием на съёмку, используем правильно обработанные фото работ и качественный сток. Ваше участие — изредка присылать фото новых работ. 10–15 минут в неделю — и контент готов.',
  },
  {
    question: 'Как работает SEO для салона красоты?',
    answer:   'Мы оптимизируем сайт под геозапросы: «маникюр [район]», «косметолог Москва», «салон красоты рядом». Правильные мета-теги, структурированные данные, быстрая загрузка — и сайт попадает в топ Google и Яндекса. SEO-трафик приносит новых клиентов бесплатно каждый месяц, накапливаясь со временем.',
  },
  {
    question: 'Насколько это безопасно с точки зрения данных клиентов?',
    answer:   'Работаем строго в рамках 152-ФЗ о персональных данных. Доступ к CRM и базе — только у вас и вашего личного менеджера. NDA подписываем до начала работ. Данные клиентов никуда не передаются и не используются в других целях.',
  },
  {
    question: 'А если мы захотим уйти?',
    answer:   'Без штрафов. Уведомите за 30 дней — и договор закрыт. Сайт, бот, база клиентов и весь контент остаются у вас. Мы не держим активы «в заложниках» — это ваш бизнес.',
  },
  {
    question: 'Как начать работу с Бугаев Веб?',
    answer:   'Всё просто: оставьте заявку на сайте или напишите в Telegram @bugggd. Мы проведём бесплатный аудит вашего текущего digital-присутствия, согласуем план и уже через 2–3 дня запускаемся. Никаких долгих согласований и предоплат за несделанную работу.',
  },
]
</script>
