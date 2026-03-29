<template>
  <footer style="background: var(--dark);">

    <div class="section-container py-14 md:py-16">

      <!-- Top row: logo + tagline + socials -->
      <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">

        <!-- Brand -->
        <div class="max-w-xs">
          <a href="/" class="flex items-center gap-3 mb-4 group">
            <div
              class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
              style="background: var(--accent);"
            >
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M4 14L9 3L14 14H4Z" fill="var(--ink)" />
                <circle cx="9" cy="9.5" r="1.8" fill="var(--ink)" />
              </svg>
            </div>
            <span
              class="font-bold text-base"
              style="color: #FFFFFF; letter-spacing: -0.02em; font-family: 'Syne', sans-serif;"
            >Bugaev Web</span>
          </a>

          <p class="text-sm leading-relaxed mb-6" style="color: rgba(255,255,255,0.35);">
            IT-отдел + SMM под ключ для салонов красоты
            и beauty-клиник за&nbsp;50&nbsp;000&nbsp;₽/мес.
          </p>

          <!-- Social icons -->
          <div class="flex items-center gap-2">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              class="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.07);"
            >
              <component :is="social.icon" />
            </a>
          </div>
        </div>

        <!-- Right: nav + contact -->
        <div class="grid grid-cols-2 gap-10 md:gap-16">

          <!-- Services -->
          <div>
            <h4 class="mono text-xs uppercase tracking-widest mb-5" style="color: rgba(255,255,255,0.3);">Услуги</h4>
            <ul class="space-y-3">
              <li v-for="item in serviceLinks" :key="item.label">
                <a
                  :href="item.href"
                  class="text-sm transition-colors duration-150"
                  style="color: rgba(255,255,255,0.4);"
                  @mouseenter="(e) => (e.currentTarget as HTMLElement).style.color = '#FFFFFF'"
                  @mouseleave="(e) => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)'"
                >
                  {{ item.label }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Contacts -->
          <div>
            <h4 class="mono text-xs uppercase tracking-widest mb-5" style="color: rgba(255,255,255,0.3);">Контакты</h4>
            <address style="font-style: normal;">
              <ul class="space-y-3">
                <li>
                  <a
                    href="https://t.me/bugggd"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-2 text-sm transition-colors duration-150"
                    style="color: rgba(255,255,255,0.4);"
                    @mouseenter="(e) => (e.currentTarget as HTMLElement).style.color = '#FFFFFF'"
                    @mouseleave="(e) => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)'"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink: 0;">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
                    </svg>
                    @bugggd — Telegram
                  </a>
                </li>
                <li>
                  <a
                    href="https://max.ru/join/hPzwZMH8FPTH8xvPLPpzqP2HnHyArReIQkqcP2E4U5Q"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-2 text-sm transition-colors duration-150"
                    style="color: rgba(255,255,255,0.4);"
                    @mouseenter="(e) => (e.currentTarget as HTMLElement).style.color = '#FFFFFF'"
                    @mouseleave="(e) => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)'"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink: 0;">
                      <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" />
                    </svg>
                    Max
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:dmn8ugaev@yandex.ru"
                    class="text-sm transition-colors duration-150"
                    style="color: rgba(255,255,255,0.4);"
                    @mouseenter="(e) => (e.currentTarget as HTMLElement).style.color = '#FFFFFF'"
                    @mouseleave="(e) => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)'"
                  >
                    dmn8ugaev@yandex.ru
                  </a>
                </li>
                <li>
                  <span class="text-sm" style="color: rgba(255,255,255,0.25);">Пн–Сб: 9:00–21:00</span>
                </li>
              </ul>
            </address>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="h-px mb-7" style="background: rgba(255,255,255,0.06);" />

      <!-- Bottom row -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-xs order-2 sm:order-1 mono" style="color: rgba(255,255,255,0.18);">
          © {{ currentYear }} Bugaev Web. Все права защищены.
        </p>
        <div class="flex flex-wrap items-center gap-4 order-1 sm:order-2">
          <a
            v-for="link in legalLinks"
            :key="link.href"
            :href="link.href"
            class="text-xs transition-colors duration-150"
            style="color: rgba(255,255,255,0.22);"
            @mouseenter="(e) => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'"
            @mouseleave="(e) => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.22)'"
          >{{ link.label }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const IconTelegram = defineComponent({
  render: () => h('svg', { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'rgba(255,255,255,0.45)' }, [
    h('path', { d: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z' }),
  ]),
})

const IconInstagram = defineComponent({
  render: () => h('svg', { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'rgba(255,255,255,0.45)', 'stroke-width': '1.5' }, [
    h('rect', { x: 2, y: 2, width: 20, height: 20, rx: 5 }),
    h('path', { d: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z' }),
    h('line', { x1: 17.5, y1: 6.5, x2: 17.51, y2: 6.5 }),
  ]),
})

const IconMax = defineComponent({
  render: () => h('svg', { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'rgba(255,255,255,0.45)' }, [
    h('path', { d: 'M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z' }),
  ]),
})

const socials = [
  { label: 'Telegram',  href: 'https://t.me/bugggd',                  icon: IconTelegram },
  { label: 'Max',       href: 'https://max.ru/join/hPzwZMH8FPTH8xvPLPpzqP2HnHyArReIQkqcP2E4U5Q',          icon: IconMax },
  { label: 'Instagram', href: 'https://www.instagram.com/dmbugaev_?igsh=NzhiaWJlMzc1NjJz',          icon: IconInstagram },
]

const legalLinks = [
  { href: '/privacy',     label: 'Политика конфиденциальности' },
  { href: '/oferta',      label: 'Договор оферты' },
  { href: '/terms',       label: 'Соглашение' },
  { href: '/cookies',     label: 'Cookies' },
  { href: '/requisites',  label: 'Реквизиты' },
]

const serviceLinks = [
  { label: 'Все услуги',       href: '/uslugi'              },
  { label: 'SMM для салона',   href: '/smm-salon-krasoty'   },
  { label: 'Сайт для салона',  href: '/sait-salon-krasoty'  },
  { label: 'Telegram-бот',     href: '/telegram-bot-zapis'  },
  { label: 'Косметолог',       href: '/kosmetolog'          },
  { label: 'Барбершоп',        href: '/barbershop'          },
  { label: 'Блог',             href: '/blog'                },
]
</script>
