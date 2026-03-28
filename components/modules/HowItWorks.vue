<template>
  <section id="how-it-works" class="py-24" style="background: var(--surface);">
    <div class="section-container">

      <!-- Header -->
      <div class="mb-16">
        <div class="mb-5" data-animate="fade-down">
          <span class="badge">Процесс запуска</span>
        </div>
        <h2 class="section-title mb-4" data-animate="fade-up" data-delay="100">
          Как это работает:<br />4 простых шага
        </h2>
        <p class="section-subtitle max-w-md" data-animate="fade-up" data-delay="200">
          Не нужно разбираться в digital — мы ведём вас за руку от заявки до первых записей через сайт и бота. Всё просто и понятно.
        </p>
      </div>

      <!-- Steps (desktop) -->
      <div class="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5" data-animate="fade-up" data-delay="280">
        <div
          v-for="(step, index) in steps"
          :key="step.title"
          class="card p-8 flex flex-col gap-5 relative"
        >
          <!-- Connector line -->
          <div
            v-if="index < steps.length - 1"
            class="absolute top-12 -right-2.5 hidden lg:flex items-center"
            style="z-index: 1;"
          >
            <div class="w-5 h-px" style="background: var(--border);" />
          </div>

          <!-- Step number -->
          <div class="flex items-center gap-4">
            <div
              class="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 mono text-lg font-bold"
              style="background: var(--ink); color: #FFFFFF;"
            >
              {{ String(index + 1).padStart(2, '0') }}
            </div>
          </div>

          <!-- Week label -->
          <p class="mono text-xs tracking-widest uppercase" style="color: var(--accent-text);">{{ step.week }}</p>

          <!-- Title + desc -->
          <div>
            <h3 class="text-lg font-bold mb-2" style="color: var(--ink); letter-spacing: -0.02em;">{{ step.title }}</h3>
            <p class="text-sm leading-relaxed" style="color: var(--ink-3);">{{ step.description }}</p>
          </div>

          <!-- Points -->
          <ul class="space-y-2">
            <li
              v-for="point in step.points"
              :key="point"
              class="flex items-start gap-2.5 text-sm"
              style="color: var(--ink-2);"
            >
              <span class="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style="background: var(--accent);" />
              {{ point }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Steps (mobile) -->
      <div class="md:hidden relative flex flex-col">
        <div
          class="absolute left-5 top-0 bottom-0 w-px"
          style="background: linear-gradient(180deg, transparent, var(--border) 10%, var(--border) 90%, transparent);"
        />

        <div
          v-for="(step, index) in steps"
          :key="step.title"
          class="relative flex gap-5 pb-9"
          data-animate="fade-right"
          :data-delay="String(100 + index * 120)"
        >
          <div
            class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mono text-sm font-bold z-10"
            style="background: var(--ink); color: #FFFFFF;"
          >
            {{ String(index + 1).padStart(2, '0') }}
          </div>
          <div class="flex-1 card p-5">
            <p class="mono text-xs tracking-widest uppercase mb-2" style="color: var(--accent-text);">{{ step.week }}</p>
            <h3 class="text-base font-bold mb-1.5" style="color: var(--ink); letter-spacing: -0.02em;">{{ step.title }}</h3>
            <p class="text-sm leading-relaxed" style="color: var(--ink-3);">{{ step.description }}</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-12" data-animate="fade-up" data-delay="500">
        <a href="#contact" class="btn-primary text-base">
          Начать за 1 день
          <span style="font-size: 1.1em;">→</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    week:        'Шаг 1',
    title:       'Заявка и онлайн-встреча',
    description: 'Заполняете короткую форму или пишете в Telegram. Проводим бесплатный аудит и 30-минутный созвон — разбираем ваш салон и ставим цели.',
    points: [
      'Бесплатный аудит digital-присутствия',
      'Анализ конкурентов в вашем районе',
      'Согласование стратегии и сроков',
    ],
  },
  {
    week:        'Шаг 2',
    title:       'Разработка сайта, бота и соцсетей',
    description: 'Запускаем сайт-визитку на Nuxt.js, настраиваем Telegram-бот с автозаписью и прогревом, готовим первый контент-план для соцсетей.',
    points: [
      'Сайт с SEO, мобайлом и онлайн-записью',
      'Telegram-бот: запись, напоминания, отзывы',
      'Визуал и первые посты в Instagram',
    ],
  },
  {
    week:        'Шаг 3',
    title:       'Внедрение CRM и интеграций',
    description: 'Подключаем и настраиваем CRM YCLIENTS, переносим базу клиентов, связываем сайт → бот → CRM в единую систему.',
    points: [
      'Настройка CRM под ваш прайс и услуги',
      'Перенос базы и история записей',
      'Базовая аналитика по заявкам',
    ],
  },
  {
    week:        'Ежемесячно',
    title:       'Поддержка и рост',
    description: 'Ведём контент, отвечаем на комментарии, оптимизируем каналы по данным. Еженедельные отчёты в Telegram — видите результат в цифрах.',
    points: [
      '3–4 поста в неделю, сторис',
      'Еженедельные отчёты',
      'Рекомендации по акциям и трендам',
    ],
  },
]
</script>
