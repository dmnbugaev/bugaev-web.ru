<template>
  <section
    id="hero"
    class="relative overflow-hidden"
    style="background: var(--surface); min-height: 100vh; padding-top: 72px;"
  >
    <!-- Soft accent blob -->
    <div
      class="absolute pointer-events-none"
      style="top: 5%; right: 0; width: 480px; height: 480px; border-radius: 50%; background: var(--accent-dim); filter: blur(100px); transform: translateX(30%);"
    />
    <div
      class="absolute pointer-events-none"
      style="bottom: 15%; left: -80px; width: 280px; height: 280px; border-radius: 50%; background: rgba(143,175,138,0.05); filter: blur(80px);"
    />

    <div class="section-container relative z-10">
      <div class="grid lg:grid-cols-[1fr_340px] gap-12 xl:gap-20 items-start py-16 lg:py-24">

        <!-- Left: headline + CTAs -->
        <div>
          <!-- Badge -->
          <div class="mb-8" data-animate="fade-down" data-delay="100">
            <span class="badge">
              <span class="w-1.5 h-1.5 rounded-full flex-shrink-0" style="background: var(--accent);" />
              Цифровой пакет для салонов красоты · Москва
            </span>
          </div>

          <!-- Giant editorial headline -->
          <h1
            data-animate="fade-up"
            data-delay="150"
            style="
              font-family: 'Syne', sans-serif;
              font-weight: 800;
              line-height: 0.93;
              letter-spacing: -0.04em;
              color: var(--ink);
              font-size: clamp(3.2rem, 8.5vw, 7rem);
              margin-bottom: 1.75rem;
            "
          >
            Ваш<br />
            удалённый<br />
            <span style="color: var(--accent);">отдел</span><br />
            маркетинга
          </h1>

          <!-- Subtitle -->
          <p
            data-animate="fade-up"
            data-delay="250"
            style="font-size: 1rem; line-height: 1.7; color: var(--ink-3); max-width: 380px; margin-bottom: 2.25rem;"
          >
            Сайт, Telegram‑бот, соцсети и CRM&nbsp;— одна подписка
            вместо четырёх подрядчиков. Для салонов красоты
            и клиник.
          </p>

          <!-- CTAs -->
          <div class="flex flex-wrap gap-3 mb-14" data-animate="fade-up" data-delay="350">
            <a href="#contact" class="btn-primary">
              Оставить заявку
              <span style="font-size: 1.15em; line-height: 1;">→</span>
            </a>
            <a href="#features" class="btn-outline">
              Узнать подробнее
            </a>
          </div>

          <!-- Floating stat chips -->
          <div class="flex flex-wrap gap-2.5" data-animate="fade-up" data-delay="450">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="flex items-center gap-2.5 px-4 py-2.5 rounded-full"
              style="background: var(--surface-warm); border: 1px solid var(--border);"
            >
              <span class="mono text-sm font-bold" style="color: var(--ink);">{{ stat.value }}</span>
              <span class="text-xs" style="color: var(--ink-3);">{{ stat.label }}</span>
            </div>
          </div>
        </div>

        <!-- Right: price card (desktop) -->
        <div
          class="hidden lg:flex flex-col gap-3 flex-shrink-0"
          data-animate="fade-left"
          data-delay="300"
        >
          <!-- Main price card -->
          <div
            class="relative overflow-hidden rounded-2xl p-7"
            style="background: var(--ink); color: white;"
          >
            <!-- Accent blob inside card -->
            <div style="position: absolute; top: -60px; right: -60px; width: 200px; height: 200px; border-radius: 50%; background: rgba(143,175,138,0.10); pointer-events: none;" />

            <p class="mono text-xs mb-5 relative z-10" style="color: rgba(255,255,255,0.35); letter-spacing: 0.09em; text-transform: uppercase;">
              Подписка / месяц
            </p>

            <div class="flex items-end gap-1.5 mb-6 relative z-10">
              <span
                style="
                  font-family: 'Syne', sans-serif;
                  font-weight: 800;
                  font-size: 3.6rem;
                  line-height: 1;
                  letter-spacing: -0.04em;
                "
              >50 000</span>
              <span class="text-xl font-semibold mb-1.5" style="color: rgba(255,255,255,0.4);">₽</span>
            </div>

            <ul class="space-y-2.5 mb-6 relative z-10">
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

          <!-- Secondary info chip -->
          <div
            class="rounded-2xl px-5 py-4 flex items-center justify-between"
            style="background: var(--surface-warm); border: 1px solid var(--border);"
          >
            <div>
              <p class="mono text-xs mb-0.5" style="color: var(--ink-3);">Внедрение в первый месяц</p>
              <p class="text-sm font-semibold" style="color: var(--ink);">Без доплат за запуск</p>
            </div>
            <span class="text-2xl" style="color: var(--accent);">✓</span>
          </div>
        </div>
      </div>

      <!-- Mobile price card -->
      <div class="lg:hidden pb-16" data-animate="fade-up" data-delay="500">
        <div class="rounded-2xl p-6" style="background: var(--ink);">
          <div class="flex items-end justify-between mb-5">
            <div>
              <p class="mono text-xs mb-1" style="color: rgba(255,255,255,0.35);">Подписка / месяц</p>
              <span
                style="
                  font-family: 'Syne', sans-serif;
                  font-weight: 800;
                  font-size: 2.5rem;
                  line-height: 1;
                  letter-spacing: -0.04em;
                  color: white;
                "
              >50 000 ₽</span>
            </div>
            <span class="badge-dark">Всё включено</span>
          </div>
          <a href="#contact" class="btn-accent w-full justify-center">
            Оставить заявку →
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom fade -->
    <div
      class="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
      style="background: linear-gradient(to bottom, transparent, var(--surface));"
    />
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '50+',   label: 'клиентов в работе' },
  { value: '3×',    label: 'рост записей' },
  { value: '1 мес', label: 'до запуска системы' },
]

const priceIncludes = [
  'Сайт-визитка на Nuxt.js',
  'Telegram-бот на Python',
  'Ведение 2 соцсетей',
  'Настройка CRM YCLIENTS',
  'Личный менеджер',
]
</script>
