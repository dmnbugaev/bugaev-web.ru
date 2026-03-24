<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'scrolled' : '',
    ]"
  >
    <div class="section-container">
      <div class="flex items-center justify-between h-14 md:h-16">

        <!-- Logo -->
        <a href="#" class="flex items-center gap-2.5 group">
          <div
            class="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
            style="background: var(--accent);"
          >
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <path d="M4 14L9 3L14 14H4Z" fill="var(--ink)" />
              <circle cx="9" cy="9.5" r="1.8" fill="var(--ink)" />
            </svg>
          </div>
          <span
            class="text-base font-bold tracking-tight"
            style="color: var(--ink); font-family: 'Syne', sans-serif; letter-spacing: -0.02em;"
          >Bugaev Web</span>
        </a>

        <!-- Desktop nav -->
        <nav class="hidden md:flex items-center gap-7">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-sm font-medium transition-colors duration-150"
            style="color: var(--ink-3);"
            @mouseenter="(e) => (e.currentTarget as HTMLElement).style.color = 'var(--ink)'"
            @mouseleave="(e) => (e.currentTarget as HTMLElement).style.color = 'var(--ink-3)'"
          >
            {{ link.label }}
          </a>
        </nav>

        <!-- CTA + Burger -->
        <div class="flex items-center gap-3">
          <a
            href="https://t.me/bugaev_web"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden md:inline-flex btn-primary text-sm"
            style="padding: 0.5rem 1.25rem;"
            @click="trackTelegram('header_desktop')"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
            </svg>
            Telegram
          </a>

          <!-- Hamburger -->
          <button
            class="md:hidden flex flex-col items-center justify-center gap-1.5 w-9 h-9 rounded-lg transition-colors"
            :style="mobileMenuOpen ? 'background: var(--surface-warm);' : ''"
            aria-label="Открыть меню"
            @click="toggleMenu"
          >
            <span :class="['block w-[18px] h-0.5 rounded-full transition-all duration-300', mobileMenuOpen ? 'rotate-45 translate-y-2' : '']" style="background: var(--ink);" />
            <span :class="['block w-[18px] h-0.5 rounded-full transition-all duration-300', mobileMenuOpen ? 'opacity-0 scale-x-0' : '']" style="background: var(--ink);" />
            <span :class="['block w-[18px] h-0.5 rounded-full transition-all duration-300', mobileMenuOpen ? '-rotate-45 -translate-y-2' : '']" style="background: var(--ink);" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile overlay -->
    <Transition name="fade">
      <div
        v-if="mobileMenuOpen"
        class="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
        @click="closeMenu"
      />
    </Transition>

    <!-- Mobile drawer -->
    <div
      :class="['mobile-menu fixed top-0 right-0 bottom-0 w-72 z-50 md:hidden', mobileMenuOpen ? 'open' : '']"
      style="background: var(--surface); border-left: 1px solid var(--border);"
    >
      <div class="flex items-center justify-between px-5 py-4" style="border-bottom: 1px solid var(--border);">
        <div class="flex items-center gap-2.5">
          <div class="w-7 h-7 rounded-lg flex items-center justify-center" style="background: var(--accent);">
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
              <path d="M4 14L9 3L14 14H4Z" fill="var(--ink)" />
              <circle cx="9" cy="9.5" r="1.8" fill="var(--ink)" />
            </svg>
          </div>
          <span class="font-bold text-sm" style="color: var(--ink); font-family: 'Syne', sans-serif;">Bugaev Web</span>
        </div>
        <button
          class="w-8 h-8 flex items-center justify-center rounded-lg transition-colors"
          style="background: var(--surface-warm);"
          @click="closeMenu"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="var(--ink-3)" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </button>
      </div>

      <nav class="p-4 flex flex-col gap-1">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150"
          style="color: var(--ink-3);"
          @click="closeMenu"
          @mouseenter="(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--ink)'; (e.currentTarget as HTMLElement).style.background = 'var(--surface-warm)'; }"
          @mouseleave="(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--ink-3)'; (e.currentTarget as HTMLElement).style.background = ''; }"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="absolute bottom-0 left-0 right-0 p-4" style="border-top: 1px solid var(--border);">
        <a
          href="https://t.me/bugaev_web"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary w-full justify-center text-sm"
          @click="closeMenu(); trackTelegram('header_mobile')"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
          </svg>
          Написать в Telegram
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const navLinks = [
  { href: '#features',     label: 'Что входит' },
  { href: '#how-it-works', label: 'Как работаем' },
  { href: '#pricing',      label: 'Стоимость' },
  { href: '#faq',          label: 'FAQ' },
  { href: '#contact',      label: 'Контакты' },
]

const isScrolled     = ref(false)
const mobileMenuOpen = ref(false)

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (typeof document !== 'undefined') {
    document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : ''
  }
}

const closeMenu = () => {
  mobileMenuOpen.value = false
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
}

const handleScroll = () => { isScrolled.value = window.scrollY > 20 }

const trackTelegram = (location: string) => {
  if (typeof window !== 'undefined') {
    type WinWithYm = Window & { ym?: (...args: unknown[]) => void }
    const ym = (window as WinWithYm).ym
    if (typeof ym === 'function') ym(108208585, 'reachGoal', `telegram_click_${location}`)
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (typeof document !== 'undefined') document.body.style.overflow = ''
})
</script>

<style scoped>
header {
  background: transparent;
}

header.scrolled {
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to       { opacity: 0; }
</style>
