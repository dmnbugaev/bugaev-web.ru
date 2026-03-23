<template>
  <section id="faq" class="py-24" style="background: var(--surface-warm);">
    <div class="section-container">

      <!-- Header -->
      <div class="text-center mb-14">
        <div class="flex justify-center mb-5" data-animate="fade-down">
          <span class="badge">Вопросы и ответы</span>
        </div>
        <h2 class="section-title mb-3" data-animate="fade-up" data-delay="100">
          Часто задаваемые вопросы
        </h2>
        <p class="section-subtitle" data-animate="fade-up" data-delay="200">
          Если не нашли ответ — напишите нам в Telegram, ответим в течение часа
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
          Задать вопрос в Telegram
          <span>↗</span>
        </a>
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
    question: 'У меня уже есть сайт и соцсети. Что делать?',
    answer:   'Мы всё интегрируем, ничего лишнего не удаляем. Доработаем то, что есть — улучшим скорость, SEO, подключим бота к вашим текущим каналам.',
  },
  {
    question: 'Как вы получаете контент?',
    answer:   'Вы присылаете фото работ, мы обрабатываем, добавляем стоковые изображения. Для сторис помогаем с идеями и сценариями. Ваше участие — 10–15 минут в неделю.',
  },
  {
    question: 'Можно ли расторгнуть договор?',
    answer:   'Да, в любой момент без штрафов. Достаточно уведомить за 14 дней. Все ваши данные, сайт, бот и контент остаются у вас.',
  },
  {
    question: 'Какая CRM лучше?',
    answer:   'Рекомендуем YCLIENTS — отраслевой стандарт для beauty-бизнеса. Но можем настроить и другую под ваш запрос.',
  },
  {
    question: 'Что конкретно входит в подписку и нет ли скрытых платежей?',
    answer:   'В подписку за 50 000 ₽/мес входит полный цифровой пакет без каких-либо скрытых доплат:',
    points: [
      'Разработка и поддержка сайта-визитки на Nuxt.js',
      'Telegram-бот с автозаписью и напоминаниями',
      'Ведение 2 соцсетей (посты, сторис, Reels)',
      'Настройка CRM YCLIENTS под ваш бизнес',
      'Еженедельные отчёты и аналитика',
      'Личный менеджер в Telegram (6 дней в неделю)',
      'Хостинг и домен включены',
    ],
  },
]
</script>
