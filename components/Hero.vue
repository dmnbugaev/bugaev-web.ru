<template>
  <section
    id="hero"
    class="relative overflow-hidden flex flex-col"
    style="background: var(--surface); height: 100svh; min-height: 580px; padding-top: 72px;"
  >
    <!-- Accent blobs -->
    <div
      class="absolute pointer-events-none"
      style="top: 0; right: 0; width: 420px; height: 420px; border-radius: 50%; background: var(--accent-dim); filter: blur(90px); transform: translate(30%, -10%);"
    />
    <div
      class="absolute pointer-events-none"
      style="bottom: 10%; left: -60px; width: 240px; height: 240px; border-radius: 50%; background: rgba(143,175,138,0.05); filter: blur(70px);"
    />

    <!-- Main content — vertically centered -->
    <div class="section-container relative z-10 flex-1 flex flex-col justify-center py-6 sm:py-10">

      <div class="grid lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_340px] gap-8 xl:gap-16 items-center">

        <!-- Left: headline + CTAs -->
        <div>

          <!-- H1 -->
          <h1
            data-animate="fade-up"
            data-delay="150"
            style="
              font-family: 'Syne', sans-serif;
              font-weight: 800;
              line-height: 0.92;
              letter-spacing: -0.04em;
              color: var(--ink);
              font-size: clamp(2.5rem, 7vw, 6rem);
              margin-bottom: 1.25rem;
            "
          >
            Digital‑отдел<br />
            и&nbsp;SMM для<br />
            <span style="color: var(--accent);">салона</span><br />
            под ключ
          </h1>

          <!-- Subtitle -->
          <p
            data-animate="fade-up"
            data-delay="250"
            style="font-size: clamp(0.875rem, 1.5vw, 1rem); line-height: 1.65; color: var(--ink-3); max-width: 400px; margin-bottom: 1.75rem;"
          >
            Единая подписка 50&nbsp;000&nbsp;₽/мес — удалённый digital‑отдел
            и SMM для салона красоты в Москве.
            Рост заявок с первого месяца.
          </p>

          <!-- CTAs -->
          <div class="flex flex-wrap gap-3 mb-5 sm:mb-7" data-animate="fade-up" data-delay="350">
            <a href="#contact" class="btn-primary">
              Оставить заявку
              <span style="font-size: 1.1em; line-height: 1;">→</span>
            </a>
            <a href="#features" class="btn-outline">
              Узнать подробнее
            </a>
          </div>

          <!-- Stat chips -->
          <div class="flex flex-wrap gap-2" data-animate="fade-up" data-delay="450">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full"
              style="background: var(--surface-warm); border: 1px solid var(--border);"
            >
              <span class="mono text-xs sm:text-sm font-bold" style="color: var(--ink);">{{ stat.value }}</span>
              <span class="text-xs" style="color: var(--ink-3);">{{ stat.label }}</span>
            </div>
          </div>
        </div>

        <!-- Right: price card (desktop only) -->
        <div
          class="hidden lg:flex flex-col gap-3 flex-shrink-0"
          data-animate="fade-left"
          data-delay="300"
        >
          <!-- Main price card -->
          <div
            class="relative overflow-hidden rounded-2xl p-6 xl:p-7"
            style="background: var(--ink); color: white;"
          >
            <div style="position: absolute; top: -60px; right: -60px; width: 200px; height: 200px; border-radius: 50%; background: rgba(143,175,138,0.10); pointer-events: none;" />

            <p class="mono text-xs mb-4 relative z-10" style="color: rgba(255,255,255,0.35); letter-spacing: 0.09em; text-transform: uppercase;">
              Подписка / месяц
            </p>

            <div class="flex items-end gap-1.5 mb-5 relative z-10">
              <span
                style="
                  font-family: 'Syne', sans-serif;
                  font-weight: 800;
                  font-size: clamp(2.8rem, 4vw, 3.6rem);
                  line-height: 1;
                  letter-spacing: -0.04em;
                "
              >50 000</span>
              <span class="text-xl font-semibold mb-1.5" style="color: rgba(255,255,255,0.4);">₽</span>
            </div>

            <ul class="space-y-2 mb-5 relative z-10">
              <li
                v-for="item in priceIncludes"
                :key="item"
                class="flex items-start gap-2.5 text-sm"
                style="color: rgba(255,255,255,0.7);"
              >
                <span
                  class="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                  style="background: rgba(143,175,138,0.25);"
                >
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1.5 4l1.5 1.5 3.5-3" stroke="#8FAF8A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
                {{ item }}
              </li>
            </ul>

            <a
              href="#contact"
              class="relative z-10 flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200"
              style="background: var(--accent); color: var(--ink);"
            >
              Оставить заявку
              <span>↗</span>
            </a>
          </div>

          <!-- No extra cost chip -->
          <div
            class="rounded-2xl px-5 py-3.5 flex items-center justify-between"
            style="background: var(--surface-warm); border: 1px solid var(--border);"
          >
            <div>
              <p class="mono text-xs mb-0.5" style="color: var(--ink-3);">Внедрение в первый месяц</p>
              <p class="text-sm font-semibold" style="color: var(--ink);">Без доплат за запуск</p>
            </div>
            <span class="text-xl" style="color: var(--accent);">✓</span>
          </div>
        </div>
      </div>

      <!-- Mobile: compact price strip -->
      <div
        class="lg:hidden mt-5"
        data-animate="fade-up"
        data-delay="500"
      >
        <div
          class="flex items-center justify-between rounded-2xl px-5 py-4"
          style="background: var(--ink); box-shadow: 0 8px 32px rgba(0,0,0,0.18);"
        >
          <div>
            <p class="mono text-xs mb-0.5" style="color: rgba(255,255,255,0.35); letter-spacing: 0.07em; text-transform: uppercase;">Подписка / месяц</p>
            <div class="flex items-baseline gap-1">
              <span
                style="
                  font-family: 'Syne', sans-serif;
                  font-weight: 800;
                  font-size: 1.6rem;
                  line-height: 1;
                  letter-spacing: -0.03em;
                  color: white;
                "
              >50 000</span>
              <span style="color: rgba(255,255,255,0.45); font-size: 1rem; font-weight: 600;">₽</span>
            </div>
          </div>
          <a href="#contact" class="btn-accent text-sm whitespace-nowrap" style="padding: 0.625rem 1.25rem;">
            Заявка →
          </a>
        </div>
      </div>

    </div>

    <!-- Bottom fade -->
    <div
      class="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
      style="background: linear-gradient(to bottom, transparent, var(--surface));"
    />
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '50+',   label: 'салонов в работе' },
  { value: '3×',    label: 'рост записей' },
  { value: '1 мес', label: 'до запуска системы' },
]

const priceIncludes = [
  'Сайт-визитка: SEO, мобайл, онлайн-запись',
  'Умный Telegram-бот (запись, отзывы, прогрев)',
  'Ведение Instagram и Telegram-канала',
  'CRM YCLIENTS: настройка и интеграция',
  'Личный менеджер в Telegram',
]
</script>
