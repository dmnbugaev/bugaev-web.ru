// composables/useScrollAnimation.ts
// Uses IntersectionObserver to animate elements with data-animate attribute.
// Add data-animate="fade-up|fade-down|fade-left|fade-right|zoom-in" to any element.
// Optionally add data-delay="100|200|..." for staggered delays.
// The CSS classes are defined in assets/css/tailwind.css

let observer: IntersectionObserver | null = null
let observerRefCount = 0

const createObserver = (): IntersectionObserver => {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          // Once animated, stop observing to save resources
          observer?.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px',
    }
  )
}

export const useScrollAnimation = () => {
  const observe = (container?: HTMLElement | null) => {
    if (typeof window === 'undefined') return

    // Initialize shared observer if needed
    if (!observer) {
      observer = createObserver()
    }

    observerRefCount++

    // Find all [data-animate] elements within the container or the whole document
    const root = container || document
    const elements = root.querySelectorAll<HTMLElement>('[data-animate]')

    elements.forEach((el) => {
      observer!.observe(el)
    })
  }

  const unobserve = () => {
    observerRefCount--
    if (observerRefCount <= 0 && observer) {
      observer.disconnect()
      observer = null
      observerRefCount = 0
    }
  }

  const observeEl = (el: HTMLElement) => {
    if (typeof window === 'undefined') return
    if (!observer) {
      observer = createObserver()
      observerRefCount++
    }
    observer.observe(el)
  }

  onMounted(() => {
    // Small delay to allow DOM to settle after SSR hydration
    requestAnimationFrame(() => {
      observe()
    })
  })

  onUnmounted(() => {
    unobserve()
  })

  return { observe, unobserve, observeEl }
}
