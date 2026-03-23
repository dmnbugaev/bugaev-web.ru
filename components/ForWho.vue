<template>
  <section id="for-who" class="py-24" style="background: var(--surface-warm);">
    <div class="section-container">

      <div class="mb-14">
        <div class="mb-5" data-animate="fade-down">
          <span class="badge">Для кого эта подписка</span>
        </div>
        <h2 class="section-title mb-4" data-animate="fade-up" data-delay="100">
          Узнаёте себя?
        </h2>
        <p class="section-subtitle max-w-xl" data-animate="fade-up" data-delay="200">
          Небольшие салоны красоты, студии, кабинеты, клиники и стоматологии Москвы и Московской области — для тех, кто хочет системный маркетинг без головной боли с подрядчиками.
        </p>
      </div>

      <!-- Pain → Solution list -->
      <div class="grid sm:grid-cols-2 gap-4 mb-10" data-animate="fade-up" data-delay="200">
        <div
          v-for="pain in pains"
          :key="pain.problem"
          class="card p-6 flex flex-col gap-3"
          style="background: var(--surface);"
        >
          <p class="text-sm font-semibold" style="color: var(--ink);">{{ pain.problem }}</p>
          <div class="flex items-center gap-2">
            <div class="h-px flex-1" style="background: var(--border);" />
            <span style="color: var(--accent); font-size: 0.8rem;">↓</span>
            <div class="h-px flex-1" style="background: var(--border);" />
          </div>
          <p class="text-sm" style="color: var(--accent-text); font-weight: 600;">{{ pain.solution }}</p>
        </div>
      </div>

      <!-- Who list -->
      <div
        class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10"
        data-animate="fade-up"
        data-delay="400"
      >
        <div
          v-for="item in whoList"
          :key="item.text"
          class="card p-5 flex items-center gap-4"
          style="background: var(--surface);"
        >
          <div
            class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style="background: var(--accent-dim); color: var(--accent-text);"
          >
            <component :is="item.icon" />
          </div>
          <div>
            <p class="font-semibold text-sm" style="color: var(--ink);">{{ item.text }}</p>
            <p class="text-xs mt-0.5" style="color: var(--ink-3);">{{ item.sub }}</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div
        class="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        style="background: var(--surface); border: 1px solid var(--border);"
        data-animate="fade-up"
        data-delay="400"
      >
        <div>
          <h3 class="text-xl font-bold mb-2" style="color: var(--ink); letter-spacing: -0.02em;">Готовы обсудить ваш салон?</h3>
          <p class="text-sm" style="color: var(--ink-3);">
            Оставьте заявку — проведём бесплатный аудит и составим план продвижения
          </p>
        </div>
        <div class="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <a href="#contact" class="btn-primary whitespace-nowrap">
            Оставить заявку
          </a>
          <a href="https://t.me/bugaev_web" target="_blank" rel="noopener noreferrer" class="btn-outline whitespace-nowrap">
            Telegram ↗
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const ic = (paths: [string, Record<string, string | number>][]) =>
  defineComponent({
    render: () =>
      h('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none' },
        paths.map(([tag, attrs]) =>
          h(tag, { stroke: 'currentColor', 'stroke-width': 1.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', ...attrs })
        )
      ),
  })

const IconSalon  = ic([['path', { d: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z' }], ['path', { d: 'M9 22V12h6v10' }]])
const IconClinic = ic([['rect', { x: 3, y: 6, width: 18, height: 14, rx: 2 }], ['path', { d: 'M12 10v6M9 13h6' }], ['path', { d: 'M8 6V4a1 1 0 011-1h6a1 1 0 011 1v2' }]])
const IconStudio = ic([['circle', { cx: 12, cy: 8, r: 4 }], ['path', { d: 'M12 14c-5 0-8 2.5-8 4v1h16v-1c0-1.5-3-4-8-4z' }]])
const IconNails  = ic([['path', { d: 'M7 4C5.4 4 4 5.4 4 7v10a3 3 0 006 0V7c0-1.6-1.4-3-3-3z' }], ['path', { d: 'M17 4c-1.6 0-3 1.4-3 3v10a3 3 0 006 0V7c0-1.6-1.4-3-3-3z' }]])
const IconBrow   = ic([['path', { d: 'M2 14c3-5 7-7 10-7s7 2 10 7' }], ['circle', { cx: 12, cy: 14, r: 2 }]])
const IconDent   = ic([['path', { d: 'M12 3c-2.5 0-5 1.5-5 4 0 3 1.5 5 2 8 .5 2 3 2 3 2s2.5 0 3-2c.5-3 2-5 2-8 0-2.5-2.5-4-5-4z' }]])

const pains = [
  {
    problem:  'Нет времени вести соцсети — руки не доходят, контент выходит хаотично',
    solution: 'Мы ведём Instagram и Telegram вместо вас: 3–4 поста в неделю, ответы на комментарии, сторис — ваше участие 10–15 минут.',
  },
  {
    problem:  'Нет системного маркетинга — клиенты приходят «сарафаном», новых не прибавляется',
    solution: 'Выстраиваем полный digital-цикл: сайт → соцсети → бот → CRM. Привлечение клиентов в салон красоты становится предсказуемым.',
  },
  {
    problem:  'Боязнь удалёнщиков — непонятно, что они делают и есть ли результат',
    solution: 'Еженедельные отчёты в Telegram, видите каждое действие и цифры. Личный менеджер на связи 6 дней в неделю.',
  },
  {
    problem:  'Разрозненные подрядчики — отдельно сайт, отдельно SMM, отдельно реклама и всё не связано',
    solution: 'Один подрядчик, единая ответственность. Сайт, бот, соцсети и CRM работают в связке под ключ.',
  },
]

const whoList = [
  { icon: IconSalon,  text: 'Салон красоты любого формата', sub: 'Парикмахерские, барбершопы, beauty-студии' },
  { icon: IconClinic, text: 'Косметологическая клиника',    sub: 'Медицинская и эстетическая косметология' },
  { icon: IconStudio, text: 'Студия бровей и ресниц',       sub: 'Узкоспециализированные beauty-услуги' },
  { icon: IconNails,  text: 'Ногтевая студия / SPA',        sub: 'Маникюр, педикюр, велнес-центры' },
  { icon: IconBrow,   text: 'Бровисты и лэшмейкеры',        sub: 'Индивидуальные мастера и студии' },
  { icon: IconDent,   text: 'Стоматологические клиники',    sub: 'Частные кабинеты и многопрофильные центры' },
]
</script>
