<template>
  <section id="contact" class="py-24" style="background: var(--surface);">
    <div class="section-container">
      <div class="max-w-2xl mx-auto">

        <!-- Header -->
        <div class="text-center mb-10">
          <div class="flex justify-center mb-5" data-animate="fade-down">
            <span class="badge">Быстрый старт</span>
          </div>
          <h2 class="section-title mb-3" data-animate="fade-up" data-delay="100">
            Ваш персональный digital-отдел и SMM — за 50&nbsp;000&nbsp;₽/мес
          </h2>
          <p class="section-subtitle" data-animate="fade-up" data-delay="200">
            Без разовых платежей за запуск, без заморочек с подрядчиками — для салонов красоты и клиник Москвы. Оставьте заявку и мы свяжемся в течение часа.
          </p>
        </div>

        <!-- Form card -->
        <div
          class="rounded-3xl p-8 md:p-10"
          style="background: var(--surface); border: 1px solid var(--border); box-shadow: 0 4px 40px rgba(0,0,0,0.06);"
          data-animate="fade-up"
          data-delay="300"
        >
          <!-- Success state -->
          <Transition name="success">
            <div v-if="isSuccess" class="success-notification text-center py-10">
              <div
                class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                style="background: var(--accent-dim); border: 2px solid rgba(143,175,138,0.3);"
              >
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                  <path d="M4 13l6 6 12-12" stroke="var(--accent-text)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-3" style="color: var(--ink); letter-spacing: -0.02em;">Заявка отправлена!</h3>
              <p class="text-base mb-8 leading-relaxed" style="color: var(--ink-3);">
                Мы получили вашу заявку и свяжемся с вами в течение
                <strong style="color: var(--ink);">одного часа</strong>.
                Или напишите нам напрямую в Telegram.
              </p>
              <div class="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="https://t.me/bugaev_web" target="_blank" rel="noopener noreferrer" class="btn-primary">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
                  </svg>
                  Написать в Telegram
                </a>
                <button class="btn-outline" @click="resetForm">Отправить ещё одну</button>
              </div>
            </div>
          </Transition>

          <!-- Form -->
          <form v-if="!isSuccess" novalidate @submit.prevent="handleSubmit">
            <div class="space-y-5">

              <!-- Name + Phone -->
              <div class="grid sm:grid-cols-2 gap-5">
                <div>
                  <label class="block text-sm font-semibold mb-2" style="color: var(--ink);">
                    Имя <span style="color: #D94F4F;">*</span>
                  </label>
                  <input
                    v-model="form.name"
                    type="text"
                    placeholder="Анна"
                    autocomplete="given-name"
                    :class="['form-input', errors.name ? 'error' : '']"
                    @input="clearFieldError('name')"
                  />
                  <Transition name="err">
                    <p v-if="errors.name" class="mt-1.5 text-xs flex items-center gap-1" style="color: #D94F4F;">
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <circle cx="5.5" cy="5.5" r="4.5" stroke="currentColor" stroke-width="1.3" />
                        <path d="M5.5 3v2.5M5.5 7.5v.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" />
                      </svg>
                      {{ errors.name }}
                    </p>
                  </Transition>
                </div>

                <div>
                  <label class="block text-sm font-semibold mb-2" style="color: var(--ink);">
                    Телефон <span style="color: #D94F4F;">*</span>
                  </label>
                  <input
                    v-model="form.phone"
                    type="tel"
                    placeholder="+7 (999) 000-00-00"
                    autocomplete="tel"
                    :class="['form-input', errors.phone ? 'error' : '']"
                    @input="clearFieldError('phone')"
                  />
                  <Transition name="err">
                    <p v-if="errors.phone" class="mt-1.5 text-xs flex items-center gap-1" style="color: #D94F4F;">
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <circle cx="5.5" cy="5.5" r="4.5" stroke="currentColor" stroke-width="1.3" />
                        <path d="M5.5 3v2.5M5.5 7.5v.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" />
                      </svg>
                      {{ errors.phone }}
                    </p>
                  </Transition>
                </div>
              </div>

              <!-- Email -->
              <div>
                <label class="block text-sm font-semibold mb-2" style="color: var(--ink);">
                  Email <span style="color: #D94F4F;">*</span>
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="anna@mysalon.ru"
                  autocomplete="email"
                  :class="['form-input', errors.email ? 'error' : '']"
                  @input="clearFieldError('email')"
                />
                <Transition name="err">
                  <p v-if="errors.email" class="mt-1.5 text-xs flex items-center gap-1" style="color: #D94F4F;">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <circle cx="5.5" cy="5.5" r="4.5" stroke="currentColor" stroke-width="1.3" />
                      <path d="M5.5 3v2.5M5.5 7.5v.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" />
                    </svg>
                    {{ errors.email }}
                  </p>
                </Transition>
              </div>

              <!-- Salon name -->
              <div>
                <label class="block text-sm font-semibold mb-2" style="color: var(--ink);">
                  Название салона / клиники
                  <span class="font-normal" style="color: var(--ink-3);">(необязательно)</span>
                </label>
                <input
                  v-model="form.salon"
                  type="text"
                  placeholder="Студия Prism Beauty"
                  autocomplete="organization"
                  class="form-input"
                />
              </div>

              <!-- Hidden UTM fields -->
              <input type="hidden" name="utm_source"   :value="utmParams.utm_source" />
              <input type="hidden" name="utm_medium"   :value="utmParams.utm_medium" />
              <input type="hidden" name="utm_campaign" :value="utmParams.utm_campaign" />
              <input type="hidden" name="utm_term"     :value="utmParams.utm_term" />
              <input type="hidden" name="utm_content"  :value="utmParams.utm_content" />

              <!-- Server error -->
              <Transition name="err">
                <div
                  v-if="isError"
                  class="p-4 rounded-xl flex items-start gap-3"
                  style="background: rgba(217,79,79,0.05); border: 1px solid rgba(217,79,79,0.18);"
                >
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" class="flex-shrink-0 mt-0.5">
                    <circle cx="7.5" cy="7.5" r="6.5" stroke="#D94F4F" stroke-width="1.3" />
                    <path d="M7.5 4.5v3M7.5 9.5v.5" stroke="#D94F4F" stroke-width="1.3" stroke-linecap="round" />
                  </svg>
                  <p class="text-sm" style="color: #D94F4F;">{{ errorMessage }}</p>
                </div>
              </Transition>

              <!-- Submit -->
              <button
                type="submit"
                :disabled="isSubmitting"
                class="btn-primary w-full text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
              >
                <span v-if="!isSubmitting" class="flex items-center gap-2 justify-center">
                  Отправить заявку
                  <span style="font-size: 1.1em;">→</span>
                </span>
                <span v-else class="flex items-center gap-2 justify-center">
                  <span class="spinner" />
                  Отправляем...
                </span>
              </button>
            </div>

            <p class="text-xs text-center mt-4 leading-relaxed" style="color: var(--ink-3);">
              Нажимая «Отправить заявку», вы соглашаетесь с
              <a href="#" class="underline" style="color: var(--ink);">политикой конфиденциальности</a>.
              Данные не передаются третьим лицам.
            </p>
          </form>
        </div>

        <!-- Alternative contact -->
        <div class="mt-6 text-center" data-animate="fade-up" data-delay="400">
          <p class="text-sm mb-2" style="color: var(--ink-3);">Предпочитаете общаться напрямую?</p>
          <a
            href="https://t.me/bugaev_web"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-150"
            style="color: var(--ink);"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
            </svg>
            @bugaev_web — написать в Telegram ↗
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { utmParams } = useUtm()
const { submit, isSubmitting, isSuccess, isError, errorMessage, errors, reset } = useFormSubmit()

const form = reactive({ name: '', phone: '', email: '', salon: '' })

const clearFieldError = (field: 'name' | 'phone' | 'email') => {
  ;(errors.value as Record<string, string | undefined>)[field] = undefined
}

const handleSubmit = async () => { await submit({ ...form }) }

const resetForm = () => {
  form.name = ''; form.phone = ''; form.email = ''; form.salon = ''
  reset()
}
</script>

<style scoped>
.success-enter-active { transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
.success-enter-from   { opacity: 0; transform: scale(0.95) translateY(10px); }
.err-enter-active, .err-leave-active { transition: all 0.2s ease; }
.err-enter-from, .err-leave-to       { opacity: 0; transform: translateY(-3px); }
</style>
