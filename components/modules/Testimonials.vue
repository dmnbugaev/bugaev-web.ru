<template>
  <section id="testimonials" class="py-24" style="background: var(--surface);">
    <div class="section-container">

      <!-- Header -->
      <div class="mb-14">
        <div class="mb-5" data-animate="fade-down">
          <span class="badge">Отзывы клиентов</span>
        </div>
        <h2 class="section-title mb-3" data-animate="fade-up" data-delay="100">
          Что получают салоны через 1–3 месяца
        </h2>
        <p class="section-subtitle" data-animate="fade-up" data-delay="200">
          Реальные результаты клиентов из Москвы и Московской области — без лишних обещаний
        </p>
      </div>

      <!-- Cards -->
      <div class="grid md:grid-cols-3 gap-5">
        <div
          v-for="(t, index) in testimonials"
          :key="t.name"
          class="card p-6 flex flex-col gap-4 relative overflow-hidden"
          data-animate="fade-up"
          :data-delay="String(100 + index * 120)"
        >
          <!-- Decorative quote mark -->
          <div
            class="absolute top-3 right-5 select-none pointer-events-none"
            style="font-size: 72px; line-height: 1; color: rgba(143,175,138,0.10); font-family: 'Syne', sans-serif; font-weight: 800;"
          >"</div>

          <!-- Stars -->
          <div class="flex gap-0.5">
            <svg v-for="i in 5" :key="i" width="13" height="13" viewBox="0 0 14 14" fill="var(--accent)">
              <path d="M7 1l1.8 3.6L13 5.4l-3 2.9.7 4.1L7 10.5l-3.7 1.9.7-4.1-3-2.9 4.2-.8z" />
            </svg>
          </div>

          <!-- Quote text -->
          <blockquote class="text-sm leading-relaxed flex-1 relative z-10" style="color: var(--ink-2);">
            "{{ t.text }}"
          </blockquote>

          <!-- Result chip -->
          <div
            class="px-3 py-2 rounded-xl text-sm font-semibold"
            style="background: var(--accent-dim); color: var(--accent-text); border: 1px solid rgba(143,175,138,0.18);"
          >
            {{ t.result }}
          </div>

          <!-- Divider -->
          <div class="h-px" style="background: var(--border);" />

          <!-- Author -->
          <div class="flex items-center gap-3">
            <div
              class="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white"
              :style="`background: linear-gradient(135deg, ${t.color1}, ${t.color2});`"
            >
              {{ t.initials }}
            </div>
            <div>
              <div class="text-sm font-semibold" style="color: var(--ink);">{{ t.name }}</div>
              <div class="text-xs" style="color: var(--ink-3);">{{ t.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    text:     'Раньше тратила 2 часа в день на соцсети и всё равно выходило плохо. Теперь ведение Instagram и Telegram отдала Bugaev Web — подписчики растут, записей стало больше. Сайт окупился в первую неделю.',
    result:   '+40% записей через сайт за 1 месяц',
    name:     'Анна Соколова',
    role:     'Владелица, студия «Prism Beauty», Москва, Митино',
    initials: 'АС',
    color1:   '#8FAF8A',
    color2:   '#5A7A56',
  },
  {
    text:     'Думала, что digital — это сложно и дорого. Оказалось, что за 50 000 ₽ получаешь полноценный отдел маркетинга. Telegram-бот сам записывает клиентов, я занимаюсь косметологией, а не соцсетями.',
    result:   'Запись через бот — 35% всех новых клиентов',
    name:     'Марина Ковалёва',
    role:     'Косметолог, кабинет «Эстетика», Москва, Бутово',
    initials: 'МК',
    color1:   '#C9B8A8',
    color2:   '#9E7B7B',
  },
  {
    text:     'CRM настроили за неделю, перенесли всю базу. Клиенты теперь получают автоматические напоминания, отмены упали с 25% до 8%. А я вижу цифры каждую неделю в отчёте — понятно, откуда идут заявки.',
    result:   'Отмены записей снизились с 25% до 8%',
    name:     'Дмитрий Орлов',
    role:     'Владелец, барбершоп «NordCut», Москва, Люблино',
    initials: 'ДО',
    color1:   '#3A3A3A',
    color2:   '#8FAF8A',
  },
]
</script>
