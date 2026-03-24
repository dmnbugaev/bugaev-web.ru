// composables/useFormSubmit.ts
// Handles lead form validation, UTM enrichment, and submission via fetch API.

export interface FormData {
  name: string
  phone: string
  email: string
  salon: string
}

export interface FormErrors {
  name?: string
  phone?: string
  email?: string
}

export interface SubmitPayload extends FormData {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  submitted_at: string
  page_url: string
}

// ─── API Endpoint ────────────────────────────────────────────────────────────
// TODO: Replace with your real form submission endpoint before going live.
// Options:
//   - Your own API: 'https://api.bugaev.web/leads'
//   - Formspree:    'https://formspree.io/f/YOUR_FORM_ID'
//   - GetForm:      'https://getform.io/f/YOUR_FORM_ID'
const FORM_ENDPOINT = '/api/leads' // <-- ЗАМЕНИТЕ НА РЕАЛЬНЫЙ ENDPOINT
// ─────────────────────────────────────────────────────────────────────────────

export const useFormSubmit = () => {
  const { getUtmForForm } = useUtm()

  const isSubmitting = ref(false)
  const isSuccess = ref(false)
  const isError = ref(false)
  const errorMessage = ref('')
  const errors = ref<FormErrors>({})

  const validatePhone = (phone: string): boolean => {
    // Accepts: +7XXXXXXXXXX, 8XXXXXXXXXX, +7 (XXX) XXX-XX-XX, 8-XXX-XXX-XX-XX, etc.
    const cleaned = phone.replace(/[\s\-\(\)\.]/g, '')
    return /^(\+7|7|8)\d{10}$/.test(cleaned)
  }

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
  }

  const validate = (data: FormData): boolean => {
    const newErrors: FormErrors = {}

    if (!data.name.trim()) {
      newErrors.name = 'Пожалуйста, укажите ваше имя'
    } else if (data.name.trim().length < 2) {
      newErrors.name = 'Имя должно содержать не менее 2 символов'
    } else if (data.name.trim().length > 100) {
      newErrors.name = 'Имя слишком длинное'
    }

    if (!data.phone.trim()) {
      newErrors.phone = 'Пожалуйста, укажите номер телефона'
    } else if (!validatePhone(data.phone)) {
      newErrors.phone = 'Введите корректный номер (+7 или 8 + 10 цифр)'
    }

    if (!data.email.trim()) {
      newErrors.email = 'Пожалуйста, укажите email'
    } else if (!validateEmail(data.email)) {
      newErrors.email = 'Введите корректный email адрес'
    }

    errors.value = newErrors
    return Object.keys(newErrors).length === 0
  }

  const clearErrors = () => {
    errors.value = {}
    isError.value = false
    errorMessage.value = ''
  }

  const clearError = (field: keyof FormErrors) => {
    errors.value = { ...errors.value, [field]: undefined }
  }

  const submit = async (data: FormData): Promise<boolean> => {
    clearErrors()

    if (!validate(data)) return false

    isSubmitting.value = true
    isSuccess.value = false
    isError.value = false

    const utmData = getUtmForForm()

    const payload: SubmitPayload = {
      ...data,
      name: data.name.trim(),
      phone: data.phone.trim(),
      email: data.email.trim().toLowerCase(),
      salon: data.salon.trim(),
      ...utmData,
      submitted_at: new Date().toISOString(),
      page_url: typeof window !== 'undefined' ? window.location.href : '',
    }

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })
      if (!response.ok) {
        const err = await response.json().catch(() => ({}))
        throw new Error(
          (err as { message?: string }).message || `Ошибка сервера: ${response.status}`
        )
      }

      isSuccess.value = true

      // Track conversion in Yandex Metrika
      if (typeof window !== 'undefined') {
        type WinWithYm = Window & { ym?: (...args: unknown[]) => void }
        const ym = (window as WinWithYm).ym
        if (typeof ym === 'function') {
          ym(108208585, 'reachGoal', 'lead_form_submit')
        }
      }

      return true
    } catch (err) {
      isError.value = true
      errorMessage.value =
        err instanceof Error
          ? err.message
          : 'Ошибка при отправке. Попробуйте снова или напишите нам в Telegram.'
      return false
    } finally {
      isSubmitting.value = false
    }
  }

  const reset = () => {
    isSubmitting.value = false
    isSuccess.value = false
    isError.value = false
    errorMessage.value = ''
    errors.value = {}
  }

  return {
    isSubmitting: readonly(isSubmitting),
    isSuccess: readonly(isSuccess),
    isError: readonly(isError),
    errorMessage: readonly(errorMessage),
    errors: readonly(errors),
    submit,
    validate,
    clearErrors,
    clearError,
    reset,
  }
}
