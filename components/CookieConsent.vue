<template>
  <Teleport to="body">
    <Transition name="cookie-slide">
      <div
        v-if="showBanner"
        class="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-5"
        role="region"
        aria-label="Уведомление об использовании cookie"
      >
        <div
          class="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 md:p-5 rounded-2xl"
          style="
            background: rgba(255,255,255,0.96);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid rgba(0,0,0,0.1);
            box-shadow: 0 8px 40px rgba(0,0,0,0.12);
          "
        >
          <!-- Cookie icon -->
          <div
            class="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
            style="background: rgba(0,113,227,0.08);"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#0071e3" stroke-width="1.5" />
              <circle cx="9"  cy="10" r="1.5" fill="#0071e3" />
              <circle cx="14" cy="8.5" r="1"  fill="#0071e3" opacity="0.6" />
              <circle cx="15" cy="13.5" r="1.5" fill="#0071e3" />
              <circle cx="9.5" cy="15" r="1"  fill="#0071e3" opacity="0.6" />
            </svg>
          </div>

          <!-- Text -->
          <div class="flex-1 min-w-0">
            <p class="text-sm leading-relaxed" style="color: #6e6e73;">
              Мы используем файлы cookie для анализа трафика (Яндекс.Метрика) и улучшения работы сайта.
              <!-- TODO: Replace # with real privacy policy URL -->
              <a href="#" class="underline transition-colors duration-150" style="color: #0071e3;">
                Политика конфиденциальности
              </a>.
            </p>
          </div>

          <!-- Actions -->
          <div class="flex-shrink-0 flex items-center gap-2 w-full sm:w-auto">
            <button
              class="flex-1 sm:flex-none text-sm px-4 py-2 rounded-lg font-medium transition-all duration-150 whitespace-nowrap"
              style="color: #86868b;"
              @mouseenter="(e) => (e.currentTarget as HTMLElement).style.color = '#1d1d1f'"
              @mouseleave="(e) => (e.currentTarget as HTMLElement).style.color = '#86868b'"
              @click="handleDeny"
            >
              Отклонить
            </button>
            <button
              class="flex-1 sm:flex-none btn-primary text-sm px-5 py-2 whitespace-nowrap"
              @click="handleGrant"
            >
              Принять
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 6.5l2.5 2.5 6.5-6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const { showBanner, grantConsent, denyConsent } = useCookieConsent()
const handleGrant = () => grantConsent()
const handleDeny  = () => denyConsent()
</script>

<style scoped>
.cookie-slide-enter-active { transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1); }
.cookie-slide-leave-active { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
.cookie-slide-enter-from   { opacity: 0; transform: translateY(100%); }
.cookie-slide-leave-to     { opacity: 0; transform: translateY(20px); }
</style>
