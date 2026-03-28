<template>
  <section style="padding-top: 48px; border-top: 1px solid var(--border);">
    <h2 style="font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.25rem; margin-bottom: 20px; color: var(--ink);">Другие услуги Бугаев Веб</h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <NuxtLink
        v-for="service in relatedServices"
        :key="service.href"
        :to="service.href"
        class="card p-5 flex flex-col gap-2"
        style="text-decoration: none;"
      >
        <div style="font-size: 1.4rem;">{{ service.icon }}</div>
        <div style="font-weight: 700; font-size: 0.9rem; color: var(--ink);">{{ service.label }}</div>
        <div style="font-size: 0.8rem; color: var(--ink-3); line-height: 1.5;">{{ service.desc }}</div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{ current: string }>()

const allServices = [
  { href: '/smm-salon-krasoty',  icon: '📱', label: 'SMM для салона красоты',      desc: 'Ведение Instagram и Telegram под ключ' },
  { href: '/sait-salon-krasoty', icon: '🌐', label: 'Сайт для салона красоты',     desc: 'SEO-сайт на Nuxt.js с онлайн-записью' },
  { href: '/telegram-bot-zapis', icon: '🤖', label: 'Telegram-бот для записи',     desc: 'Автозапись клиентов 24/7' },
  { href: '/crm-yclients',       icon: '📊', label: 'Настройка CRM YCLIENTS',      desc: 'Учёт клиентов, расписание, финансы' },
  { href: '/nogtevaiya-studiya', icon: '💅', label: 'Ногтевая студия',             desc: 'SMM, сайт и бот для мастеров маникюра' },
  { href: '/kosmetolog',         icon: '✨', label: 'Продвижение косметолога',      desc: 'Привлечение клиентов для косметолога' },
  { href: '/barbershop',         icon: '✂️', label: 'Продвижение барбершопа',      desc: 'Digital-маркетинг для барбершопа' },
]

const relatedServices = computed(() =>
  allServices.filter(s => s.href !== props.current).slice(0, 4)
)
</script>
