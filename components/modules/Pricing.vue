<template>
  <section id="pricing" class="py-24" style="background: var(--surface);">
    <div class="section-container">

      <!-- Header -->
      <div class="text-center mb-12">
        <div class="flex justify-center mb-5" data-animate="fade-down">
          <span class="badge">Стоимость</span>
        </div>
        <h2 class="section-title mb-3" data-animate="fade-up" data-delay="100">
          Один тариф — максимум результата
        </h2>
        <p class="section-subtitle max-w-md mx-auto" data-animate="fade-up" data-delay="200">
          Без скрытых платежей, без «базового» и «расширенного» — только всё и сразу
        </p>
      </div>

      <!-- Pricing card -->
      <div class="max-w-2xl mx-auto" data-animate="zoom-in" data-delay="280">
        <div
          class="relative overflow-hidden rounded-3xl p-8 md:p-12"
          style="background: var(--surface); border: 1px solid var(--border); box-shadow: 0 4px 40px rgba(0,0,0,0.07);"
        >
          <!-- Accent top line -->
          <div class="absolute top-0 left-0 right-0 h-0.5" style="background: var(--accent);" />

          <!-- Header row -->
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-10 pt-3">
            <div>
              <span class="badge inline-flex mb-3">Всё включено</span>
              <h3
                class="text-xl font-bold"
                style="color: var(--ink); letter-spacing: -0.02em;"
              >Подписка «Полный пакет»</h3>
              <p class="text-sm mt-1" style="color: var(--ink-3);">Для салонов красоты и beauty-клиник</p>
            </div>

            <div class="sm:text-right sm:flex-shrink-0">
              <div class="flex items-end gap-1 sm:justify-end">
                <span
                  class="font-bold leading-none"
                  style="font-family: 'Syne', sans-serif; font-size: 3.8rem; color: var(--ink); letter-spacing: -0.04em;"
                >50 000</span>
                <span class="text-2xl font-semibold mb-1.5" style="color: var(--ink-3);">₽</span>
              </div>
              <p class="mono text-xs tracking-widest uppercase" style="color: var(--ink-3);">в месяц · без НДС</p>
            </div>
          </div>

          <!-- Divider -->
          <div class="h-px mb-8" style="background: var(--border);" />

          <!-- Features -->
          <div class="grid sm:grid-cols-2 gap-3 mb-8">
            <div
              v-for="feature in includedFeatures"
              :key="feature"
              class="flex items-start gap-3"
            >
              <div
                class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style="background: var(--accent-dim);"
              >
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <path d="M1.5 4.5l2 2 4-4" stroke="#5A7A56" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <span class="text-sm" style="color: var(--ink-2);">{{ feature }}</span>
            </div>
          </div>

          <!-- Guarantee note -->
          <div
            class="flex items-start gap-3 p-4 rounded-xl mb-8"
            style="background: var(--surface-warm); border: 1px solid var(--border);"
          >
            <div class="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style="background: var(--accent-dim);">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" stroke="#5A7A56" stroke-width="1.5" stroke-linejoin="round" />
                <path d="M9 12l2 2 4-4" stroke="#5A7A56" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <p class="text-sm leading-relaxed" style="color: var(--ink-3);">
              <span class="font-semibold" style="color: var(--ink);">Всё внедрение в первый месяц</span>
              — уже включено в абонемент. Без доплат за запуск.
            </p>
          </div>

          <!-- Buttons -->
          <div class="flex flex-col sm:flex-row gap-3">
            <a href="#contact" class="btn-primary flex-1 justify-center text-base py-4">
              Оставить заявку
              <span style="font-size: 1.1em;">→</span>
            </a>
            <a
              href="https://t.me/bugggd"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-outline flex-1 justify-center text-base py-4"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
              </svg>
              Telegram
            </a>
            <a
              href="https://max.ru/join/hPzwZMH8FPTH8xvPLPpzqP2HnHyArReIQkqcP2E4U5Q"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-outline flex-1 justify-center text-base py-4"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" />
              </svg>
              Max
            </a>
          </div>
        </div>

        <p
          class="text-center text-xs mt-4 mono"
          style="color: var(--ink-3);"
          data-animate="fade-up"
          data-delay="400"
        >
          Оплата ежемесячно. Работаем по договору. Выставляем счёт и акт.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const includedFeatures = [
  'Сайт-визитка на Nuxt.js (разработка + поддержка)',
  'Telegram-бот на Python',
  'Ведение 2 соцсетей (посты + сторис + Reels)',
  'Настройка и поддержка CRM YCLIENTS',
  'Связка каналов в единую воронку',
  'Еженедельная аналитика и отчёты',
  'Личный менеджер в Telegram (6 дней/нед)',
  'Настройка Яндекс.Метрики и целей',
  'Email-маркетинг (до 2 рассылки/мес)',
  'Ежемесячная стратегическая сессия',
  'Неограниченные правки по контенту',
  'Хостинг и домен включены',
]
</script>
