// composables/useCookieConsent.ts
// Manages cookie/analytics consent with localStorage persistence.
// Yandex Metrika is initialized only after the user grants consent.
//
const CONSENT_KEY = 'bugaev_cookie_consent'
const CONSENT_VERSION = '1' // Bump this string to re-ask users after policy changes

export type ConsentStatus = 'granted' | 'denied' | 'pending'

// Module-level state — shared across all component instances
const consentStatus = ref<ConsentStatus>('pending')
const showBanner = ref(false)
const metrikaLoaded = ref(false)

export const useCookieConsent = () => {
  const loadConsent = () => {
    if (typeof window === 'undefined') return

    try {
      const raw = localStorage.getItem(CONSENT_KEY)
      if (!raw) {
        showBanner.value = true
        consentStatus.value = 'pending'
        return
      }

      const data = JSON.parse(raw) as { status: ConsentStatus; version: string }

      if (data.version !== CONSENT_VERSION) {
        // Policy version changed — re-ask the user
        localStorage.removeItem(CONSENT_KEY)
        showBanner.value = true
        consentStatus.value = 'pending'
        return
      }

      consentStatus.value = data.status
      showBanner.value = false

      if (data.status === 'granted') {
        loadYandexMetrika()
      }
    } catch {
      showBanner.value = true
      consentStatus.value = 'pending'
    }
  }

  const grantConsent = () => {
    consentStatus.value = 'granted'
    showBanner.value = false
    try {
      localStorage.setItem(
        CONSENT_KEY,
        JSON.stringify({ status: 'granted', version: CONSENT_VERSION })
      )
    } catch {
      // ignore
    }
    loadYandexMetrika()
  }

  const denyConsent = () => {
    consentStatus.value = 'denied'
    showBanner.value = false
    try {
      localStorage.setItem(
        CONSENT_KEY,
        JSON.stringify({ status: 'denied', version: CONSENT_VERSION })
      )
    } catch {
      // ignore
    }
  }

  const resetConsent = () => {
    try {
      localStorage.removeItem(CONSENT_KEY)
    } catch {
      // ignore
    }
    consentStatus.value = 'pending'
    showBanner.value = true
  }

  const loadYandexMetrika = () => {
    if (typeof window === 'undefined') return
    if (metrikaLoaded.value) return

    // ─── Yandex Metrika ──────────────────────────────────────────────────
    // TODO: Replace 'XXXXXXXX' with your real Yandex Metrika counter ID.
    // Example: const METRIKA_ID = 12345678
    const METRIKA_ID = 108208585
    // ─────────────────────────────────────────────────────────────────────

    metrikaLoaded.value = true

    type WinWithYm = Window & { ym?: (...args: unknown[]) => void }
    const win = window as WinWithYm

    // Initialize the ym() queue function
    if (!win.ym) {
      const ymFn: ((...args: unknown[]) => void) & { a?: unknown[][] } = function (...args) {
        ymFn.a = ymFn.a || []
        ymFn.a.push(args)
      }
      win.ym = ymFn
    }

    win.ym(METRIKA_ID, 'init', {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    })

    // Inject script tag
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://mc.yandex.ru/metrika/tag.js'
    document.head.appendChild(script)

    // Noscript fallback pixel
    const noscript = document.createElement('noscript')
    const img = document.createElement('img')
    img.src = `https://mc.yandex.ru/watch/${METRIKA_ID}`
    img.style.cssText = 'position:absolute;left:-9999px;'
    img.alt = ''
    noscript.appendChild(img)
    document.body.appendChild(noscript)

    console.log(`[Yandex Metrika] Loaded counter ${METRIKA_ID}`)
  }

  onMounted(() => {
    loadConsent()
  })

  return {
    consentStatus: readonly(consentStatus),
    showBanner: readonly(showBanner),
    metrikaLoaded: readonly(metrikaLoaded),
    grantConsent,
    denyConsent,
    resetConsent,
    loadYandexMetrika,
  }
}
