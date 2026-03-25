<template>
  <section id="features" class="relative py-24" style="background: var(--dark);">
    <div class="section-container">

      <!-- Header -->
      <div class="mb-16">
        <div class="mb-5" data-animate="fade-down">
          <span class="badge-dark">Состав пакета</span>
        </div>
        <h2
          class="section-title-light mb-4"
          data-animate="fade-up"
          data-delay="100"
        >
          Что входит в подписку<br />
          <span style="color: var(--accent);">50&nbsp;000&nbsp;₽ в месяц</span>
        </h2>
        <p class="section-subtitle-light max-w-lg" data-animate="fade-up" data-delay="200">
          5 направлений в одной подписке — комплексный маркетинг для салона красоты без скрытых доплат
        </p>
      </div>

      <!-- Cards grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(feature, index) in features"
          :key="feature.title"
          class="p-6 sm:p-7 flex flex-col gap-4 rounded-2xl cursor-default transition-transform duration-300 hover:-translate-y-1 active:scale-[0.99]"
          :style="feature.highlight
            ? 'background: var(--accent); border: 1px solid transparent;'
            : 'background: var(--dark-card); border: 1px solid rgba(255,255,255,0.06);'"
          data-animate="fade-up"
          :data-delay="String(80 + index * 80)"
        >
          <!-- Number -->
          <span
            class="mono text-xs tracking-widest"
            :style="feature.highlight ? 'color: rgba(15,15,15,0.45)' : 'color: rgba(255,255,255,0.22)'"
          >
            {{ String(index + 1).padStart(2, '0') }}
          </span>

          <!-- Icon -->
          <div
            class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            :style="feature.highlight ? 'background: rgba(15,15,15,0.10); color: var(--ink);' : 'background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.65);'"
          >
            <component :is="feature.icon" />
          </div>

          <!-- Content -->
          <div class="flex-1">
            <h3
              class="text-base font-semibold mb-2"
              :style="feature.highlight ? 'color: var(--ink)' : 'color: #FFFFFF'"
            >{{ feature.title }}</h3>
            <p
              class="text-sm leading-relaxed"
              :style="feature.highlight ? 'color: rgba(15,15,15,0.6)' : 'color: rgba(255,255,255,0.42)'"
            >{{ feature.description }}</p>
          </div>

          <!-- Tags -->
          <div
            class="flex flex-wrap gap-1.5 pt-3"
            :style="feature.highlight ? 'border-top: 1px solid rgba(15,15,15,0.12)' : 'border-top: 1px solid rgba(255,255,255,0.07)'"
          >
            <span
              v-for="tag in feature.tags"
              :key="tag"
              class="text-xs px-2.5 py-1 rounded-full mono"
              :style="feature.highlight
                ? 'background: rgba(15,15,15,0.10); color: rgba(15,15,15,0.65)'
                : 'background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.45)'"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <!-- Price callout -->
      <div
        class="mt-10 text-center py-5 rounded-2xl"
        style="border: 1px solid rgba(255,255,255,0.07); background: rgba(255,255,255,0.02);"
        data-animate="fade-up"
        data-delay="600"
      >
        <p class="text-base" style="color: rgba(255,255,255,0.4);">
          Всё включено в одну подписку —
          <span class="font-bold text-lg" style="color: var(--accent);">50&nbsp;000&nbsp;₽/мес</span>,
          без скрытых доплат
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const ic = (paths: [string, Record<string, string | number>][]) =>
  defineComponent({
    render: () =>
      h('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none' },
        paths.map(([tag, attrs]) =>
          h(tag, { stroke: 'currentColor', 'stroke-width': 1.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', ...attrs })
        )
      ),
  })

const IconWebsite = ic([
  ['rect', { x: 2, y: 3, width: 20, height: 15, rx: 2 }],
  ['path', { d: 'M8 21h8M12 18v3' }],
  ['path', { d: 'M2 7h20' }],
])

const IconBot = ic([
  ['rect', { x: 4, y: 8, width: 16, height: 13, rx: 2 }],
  ['path', { d: 'M12 2v6M9 2h6' }],
  ['circle', { cx: 9, cy: 14, r: 1.5, stroke: 'none', fill: 'currentColor' }],
  ['circle', { cx: 15, cy: 14, r: 1.5, stroke: 'none', fill: 'currentColor' }],
  ['path', { d: 'M8 17.5h8' }],
])

const IconSocial = ic([
  ['circle', { cx: 18, cy: 5, r: 2.5 }],
  ['circle', { cx: 6, cy: 12, r: 2.5 }],
  ['circle', { cx: 18, cy: 19, r: 2.5 }],
  ['path', { d: 'M8.5 10.8l7-3.6M8.5 13.2l7 3.6' }],
])

const IconCRM = ic([
  ['rect', { x: 2, y: 3, width: 9, height: 9, rx: 1.5 }],
  ['rect', { x: 13, y: 3, width: 9, height: 9, rx: 1.5 }],
  ['rect', { x: 2, y: 13, width: 9, height: 9, rx: 1.5 }],
  ['path', { d: 'M17.5 16v3M16 17.5h3' }],
])

const IconManager = ic([
  ['path', { d: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2' }],
  ['circle', { cx: 12, cy: 7, r: 4 }],
])

const features = [
  {
    icon:        IconWebsite,
    title:       'Сайт-визитка на Nuxt.js',
    description: 'Лендинг под услуги салона или клиники: цены, контакты, онлайн-запись. Мобильная адаптация, быстрая загрузка и базовая SEO-оптимизация — ключи, мета-теги, структура.',
    tags:        ['Nuxt.js', 'SEO', 'Онлайн-запись'],
    highlight:   false,
  },
  {
    icon:        IconBot,
    title:       'Telegram-бот на Python (aiogram)',
    description: 'Онлайн-запись, автонапоминания о визите, сбор отзывов и автоворонка с приветственными цепочками. Снижает неявки на 30–40%.',
    tags:        ['Python', 'Автозапись', 'Прогрев'],
    highlight:   false,
  },
  {
    icon:        IconSocial,
    title:       'Ведение Instagram и Telegram-канала',
    description: '3–4 поста в неделю: советы, акции, «до/после», новости салона. Визуал в Canva под бьюти-нишу, ответы на комментарии, сторителлинг раз в неделю.',
    tags:        ['Instagram', 'Telegram', 'Reels'],
    highlight:   false,
  },
  {
    icon:        IconCRM,
    title:       'CRM YCLIENTS и интеграции',
    description: 'Подключение и настройка CRM, перенос базы клиентов. Связка сайт → бот → CRM, базовая аналитика по заявкам и записям.',
    tags:        ['YCLIENTS', 'Аналитика', 'Интеграция'],
    highlight:   false,
  },
  {
    icon:        IconManager,
    title:       'Личный менеджер в Telegram',
    description: 'Один человек координирует весь digital. Связь по рабочим вопросам, рекомендации по акциям и трендам, еженедельные отчёты — 6 дней в неделю.',
    tags:        ['Поддержка 6/7', 'Отчёты', 'Стратегия'],
    highlight:   true,
  },
]
</script>
