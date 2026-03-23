// composables/useUtm.ts
// Captures UTM parameters from URL query string, persists to sessionStorage,
// and provides reactive refs for use in hidden form fields.

export interface UtmParams {
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_term: string
  utm_content: string
}

const UTM_STORAGE_KEY = 'bugaev_utm_params'

// Module-level reactive state (shared across component instances)
const utmParams = ref<UtmParams>({
  utm_source: '',
  utm_medium: '',
  utm_campaign: '',
  utm_term: '',
  utm_content: '',
})

export const useUtm = () => {
  const parseAndStore = () => {
    if (typeof window === 'undefined') return

    const url = new URL(window.location.href)
    const utmKeys: (keyof UtmParams)[] = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_term',
      'utm_content',
    ]

    const freshParams: Partial<UtmParams> = {}
    let hasUtm = false

    utmKeys.forEach((key) => {
      const value = url.searchParams.get(key)
      if (value) {
        freshParams[key] = value
        hasUtm = true
      }
    })

    if (hasUtm) {
      // Fresh UTM from URL overwrites stored values
      try {
        const stored = loadFromStorage()
        const merged: UtmParams = { ...stored, ...(freshParams as UtmParams) }
        sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(merged))
        utmParams.value = merged
      } catch {
        // sessionStorage might be unavailable
        utmParams.value = { ...utmParams.value, ...(freshParams as UtmParams) }
      }
    } else {
      // Load from storage if no fresh UTM params in URL
      utmParams.value = loadFromStorage()
    }
  }

  const loadFromStorage = (): UtmParams => {
    const defaults: UtmParams = {
      utm_source: '',
      utm_medium: '',
      utm_campaign: '',
      utm_term: '',
      utm_content: '',
    }

    if (typeof window === 'undefined') return defaults

    try {
      const raw = sessionStorage.getItem(UTM_STORAGE_KEY)
      if (!raw) return defaults
      return { ...defaults, ...(JSON.parse(raw) as Partial<UtmParams>) }
    } catch {
      return defaults
    }
  }

  const clearUtm = () => {
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.removeItem(UTM_STORAGE_KEY)
      } catch {
        // ignore
      }
    }
    utmParams.value = {
      utm_source: '',
      utm_medium: '',
      utm_campaign: '',
      utm_term: '',
      utm_content: '',
    }
  }

  // Returns only non-empty UTM values as a plain object for form submission
  const getUtmForForm = (): Record<string, string> => {
    const result: Record<string, string> = {}
    ;(Object.keys(utmParams.value) as (keyof UtmParams)[]).forEach((key) => {
      if (utmParams.value[key]) {
        result[key] = utmParams.value[key]
      }
    })
    return result
  }

  onMounted(() => {
    parseAndStore()
  })

  return {
    utmParams: readonly(utmParams),
    parseAndStore,
    clearUtm,
    getUtmForForm,
  }
}
