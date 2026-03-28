<template>
  <Transition name="slide-up">
    <div
      v-if="isVisible"
      class="fixed bottom-4 left-4 right-4 z-40 md:hidden"
    >
      <a
        href="https://t.me/bugaev_web"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-sm font-bold shadow-lg"
        style="background: var(--accent); color: var(--ink);"
        @click="trackClick"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
        </svg>
        Написать в Telegram
      </a>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 400
}

const trackClick = () => {
  if (typeof window !== 'undefined') {
    type WinWithYm = Window & { ym?: (...args: unknown[]) => void }
    const ym = (window as WinWithYm).ym
    if (typeof ym === 'function') ym(108208585, 'reachGoal', 'telegram_click_sticky_mobile')
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.slide-up-enter-active, .slide-up-leave-active {
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.slide-up-enter-from, .slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
