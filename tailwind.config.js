/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Syne', 'sans-serif'],
        mono: ['"Syne Mono"', 'monospace'],
      },
      colors: {
        accent:         '#8FAF8A',
        'accent-text':  '#5A7A56',
        ink:            '#0F0F0F',
        'ink-2':        '#3A3A3A',
        'ink-3':        '#888888',
        surface:        '#FFFFFF',
        'surface-warm': '#F9F8F6',
        dark:           '#0F0F0F',
        'dark-card':    '#1C1C1C',
      },
      boxShadow: {
        card:       '0 2px 16px rgba(0,0,0,0.06)',
        'card-hover':'0 10px 40px rgba(0,0,0,0.1)',
        header:     '0 1px 0 rgba(0,0,0,0.06)',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
