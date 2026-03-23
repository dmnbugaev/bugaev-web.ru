<template>
  <section id="advantages" class="py-24 relative" style="background: var(--dark);">
    <div class="section-container">

      <!-- Header -->
      <div class="mb-16">
        <div class="mb-5" data-animate="fade-down">
          <span class="badge-dark">Наши преимущества</span>
        </div>
        <h2 class="section-title-light mb-4" data-animate="fade-up" data-delay="100">
          Почему подписка<br />
          <span style="color: var(--accent);">выгоднее</span>, чем нанимать
        </h2>
        <p class="section-subtitle-light max-w-md" data-animate="fade-up" data-delay="200">
          Посчитайте сами: отдельный SMM‑менеджер — от 60 000 ₽/мес, маркетолог — от 80 000 ₽, разработчик — от 100 000 ₽. Или вся команда за 50 000 ₽ под ключ.
        </p>
      </div>

      <!-- 2×2 Why Us grid -->
      <div
        class="relative rounded-2xl overflow-hidden mb-14"
        style="border: 1px solid rgba(255,255,255,0.07);"
        data-animate="zoom-in"
        data-delay="280"
      >
        <!-- Grid cells (gap creates divider lines) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-px" style="background: rgba(255,255,255,0.06);">
          <div
            v-for="(item, i) in whyItems"
            :key="item.problem"
            class="p-8 lg:p-10 flex flex-col gap-4"
            style="background: var(--dark);"
          >
            <!-- Problem label -->
            <p class="mono text-xs tracking-widest uppercase" style="color: rgba(255,255,255,0.25);">
              Проблема
            </p>

            <h3
              class="font-bold"
              style="
                font-family: 'Syne', sans-serif;
                font-size: clamp(1rem, 1.5vw, 1.2rem);
                letter-spacing: -0.02em;
                color: rgba(255,255,255,0.7);
                line-height: 1.3;
              "
            >{{ item.problem }}</h3>

            <!-- Arrow divider -->
            <div class="flex items-center gap-3">
              <div class="flex-1 h-px" style="background: rgba(255,255,255,0.07);" />
              <span style="color: var(--accent); font-size: 1.1rem;">↓</span>
              <div class="flex-1 h-px" style="background: rgba(255,255,255,0.07);" />
            </div>

            <!-- Solution -->
            <p
              class="font-bold text-base"
              style="color: var(--accent); letter-spacing: -0.015em;"
            >{{ item.solution }}</p>

            <p class="text-sm leading-relaxed" style="color: rgba(255,255,255,0.35);">{{ item.detail }}</p>
          </div>
        </div>

        <!-- Center label overlay (desktop) -->
        <div
          class="absolute inset-0 items-center justify-center pointer-events-none hidden sm:flex"
          style="z-index: 10;"
        >
          <div
            class="px-6 py-4 rounded-2xl text-center shadow-xl"
            style="background: var(--accent);"
          >
            <p class="mono font-bold text-sm tracking-widest uppercase" style="color: var(--ink);">Почему мы</p>
          </div>
        </div>
      </div>

      <!-- Stats row -->
      <div
        class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14"
        data-animate="fade-up"
        data-delay="350"
      >
        <div
          v-for="stat in teamStats"
          :key="stat.label"
          class="rounded-2xl p-5 text-center"
          style="background: var(--dark-card); border: 1px solid rgba(255,255,255,0.06);"
        >
          <div
            class="font-bold mb-1"
            style="font-family: 'Syne', sans-serif; font-size: 2rem; line-height: 1; letter-spacing: -0.03em; color: var(--accent);"
          >{{ stat.value }}</div>
          <div class="text-xs leading-snug" style="color: rgba(255,255,255,0.35); white-space: pre-line;">{{ stat.label }}</div>
        </div>
      </div>

      <!-- CTA banner -->
      <div
        class="rounded-3xl p-10 text-center"
        style="background: var(--accent);"
        data-animate="fade-up"
        data-delay="450"
      >
        <h3
          class="text-2xl font-bold mb-3"
          style="color: var(--ink); letter-spacing: -0.03em;"
        >Ваш персональный digital-отдел — уже в следующем месяце</h3>
        <p class="text-base mb-8" style="color: rgba(15,15,15,0.6);">
          50 000 ₽/мес — без разовых платежей, без заморочек с подрядчиками, с понятным результатом по заявкам и записям
        </p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#contact"
            class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200"
            style="background: var(--ink); color: #FFFFFF;"
          >
            Оставить заявку
            <span style="font-size: 1.1em;">→</span>
          </a>
          <a
            href="https://t.me/bugaev_web"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200"
            style="background: rgba(15,15,15,0.10); color: var(--ink); border: 1.5px solid rgba(15,15,15,0.15);"
          >
            Написать в Telegram
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const whyItems = [
  {
    problem:  'Нанимать SMM-менеджера, маркетолога и разработчика по отдельности',
    solution: 'Один подрядчик, единая ответственность',
    detail:   'SMM — от 60 к, маркетолог — от 80 к, разработчик — от 100 к. Итого 240 000+ ₽/мес без гарантий. Наша подписка — 50 000 ₽, всё включено.',
  },
  {
    problem:  'Долгий старт и нет гарантии результата',
    solution: 'Запуск за 2–4 недели без доплат',
    detail:   'Внедрение в первый месяц входит в подписку. Сайт, бот, CRM и соцсети готовы к работе без разовых платежей за запуск.',
  },
  {
    problem:  'Подрядчики не понимают бьюти-специфику',
    solution: 'Экспертиза именно в бьюти и медицине',
    detail:   'Работаем только с салонами красоты, студиями, клиниками и стоматологиями Москвы. Знаем нишу, конкурентов и что работает.',
  },
  {
    problem:  'Непонятно, что происходит и есть ли эффект',
    solution: 'Прозрачная аналитика и отчёты',
    detail:   'Еженедельные отчёты в Telegram: заявки, записи, охваты, конверсии. Видите каждое действие и результат в цифрах.',
  },
]

const teamStats = [
  { value: '50+',  label: 'Клиентов\nв работе' },
  { value: '4.9★', label: 'Средняя\nоценка' },
  { value: '3×',   label: 'Рост\nзаписей' },
  { value: '96%',  label: 'Продлевают\nподписку' },
]
</script>
