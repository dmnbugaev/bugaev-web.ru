# Отчёт о рефакторинге — Bugaev Web

**Дата:** 2026-03-28  
**Проект:** Nuxt 3 / TypeScript — landing page digital-агентства

---

## 1. Удалённые файлы

### Статические дублирующие блог-страницы (8 файлов)

Все 8 файлов дублировали содержимое `.md`-файлов из `content/blog/`. При этом статические Vue-роуты имеют приоритет над динамическим `[slug].vue`, из-за чего Nuxt Content и `[slug].vue` **никогда не задействовались** для этих URL.

| Файл | Причина |
|------|---------|
| `pages/blog/kak-privlech-klientov-v-salon-krasoty.vue` | Дублирует `content/blog/kak-privlech-klientov-v-salon-krasoty.md` |
| `pages/blog/kak-razkrutit-salon-krasoty-s-nulya.vue` | Дублирует `content/blog/kak-razkrutit-salon-krasoty-s-nulya.md` |
| `pages/blog/kak-uvelichit-zapis-v-salone-krasoty.vue` | Дублирует `content/blog/kak-uvelichit-zapis-v-salone-krasoty.md` |
| `pages/blog/kak-vesti-instagram-dlya-salona-krasoty.vue` | Дублирует `content/blog/kak-vesti-instagram-dlya-salona-krasoty.md` |
| `pages/blog/kontent-plan-dlya-salona-krasoty.vue` | Дублирует `content/blog/kontent-plan-dlya-salona-krasoty.md` |
| `pages/blog/skolko-stoit-smm-dlya-salona-krasoty.vue` | Дублирует `content/blog/skolko-stoit-smm-dlya-salona-krasoty.md` |
| `pages/blog/telegram-bot-dlya-zapisi-klientov.vue` | Дублирует `content/blog/telegram-bot-dlya-zapisi-klientov.md` |
| `pages/blog/yclients-nastroyka-dlya-salona.vue` | Дублирует `content/blog/yclients-nastroyka-dlya-salona.md` |

**После удаления:** все `/blog/[slug]` URL обрабатываются `pages/blog/[slug].vue` через Nuxt Content из `.md`-файлов.

---

## 2. Созданные файлы

| Файл | Назначение |
|------|-----------|
| `utils/validation.ts` | Общие функции `validatePhone` и `validateEmail` — единый источник правды |
| `.env.example` | Документация переменных окружения для SMTP |

---

## 3. Изменённые ключевые файлы

### `utils/validation.ts` (новый)
Вынесены дублирующиеся функции валидации телефона и email, которые раньше были скопированы в двух местах.

### `composables/useFormSubmit.ts`
- Удалены inline-функции `validatePhone` и `validateEmail`
- Теперь используются auto-imported версии из `utils/validation.ts`

### `server/api/leads.post.ts`
- Удалены дублирующие функции `validatePhone` и `validateEmail`
- Добавлен явный импорт: `import { validatePhone, validateEmail } from '../../utils/validation'`

### `nuxt.config.ts`
- Добавлена настройка `components: [{ path: '~/components', pathPrefix: false }]`
- Позволяет использовать компоненты из подпапок без изменения имён: `<Header />`, `<Footer />` и т.д.

### `components/` — реорганизация структуры

Все 15 компонентов перемещены в подпапки согласно Nuxt 3 best practices:

```
components/
├── layout/
│   ├── Header.vue
│   └── Footer.vue
└── modules/
    ├── Advantages.vue
    ├── CookieConsent.vue
    ├── FAQ.vue
    ├── Features.vue
    ├── ForWho.vue
    ├── Hero.vue
    ├── HowItWorks.vue
    ├── LeadForm.vue
    ├── Pricing.vue
    ├── SeoSchema.vue
    ├── ServiceRelated.vue
    ├── StickyTelegramCTA.vue
    └── Testimonials.vue
```

Благодаря `pathPrefix: false` все шаблоны (`<Header />`, `<LeadForm />` и т.д.) работают без изменений.

---

## 4. Что не изменялось и почему

- **Composition API** — весь код уже на `<script setup lang="ts">`, миграция не требовалась
- **`nuxt.config.ts`** — конфигурация чистая, модули (`tailwindcss`, `fonts`, `content`) все используются
- **`package.json`** — нет лишних зависимостей, скрипты в порядке
- **SSR** — все composables корректно проверяют `typeof window`
- **Безопасность** — rate limiting, XSS-экранирование, honeypot уже были реализованы правильно

---

## 5. Рекомендации по дальнейшей оптимизации

### HIGH PRIORITY
- **Тесты** — в проекте нет ни одного теста. Рекомендуется Vitest + Vue Test Utils для composables и компонентов. Особенно важно покрыть `useFormSubmit.ts` и `server/api/leads.post.ts`.

### MEDIUM PRIORITY
- **TypeScript interfaces** — создать `types/` директорию для интерфейсов (например, `BlogArticle`, `LeadPayload`). Сейчас типы размазаны по composables.
- **`blog/index.vue` — кэш** — рассмотреть `useAsyncData('blog-list', ..., { server: true })` с явным `getCachedData` для инкрементального обновления.

### LOW PRIORITY
- **`base/` компоненты** — если в будущем появятся переиспользуемые UI-элементы (кнопки, инпуты как отдельные компоненты), создать `components/base/`.
- **Инлайн-стили** — в ряде компонентов много `style="..."` атрибутов. При желании — вынести в Tailwind-классы или CSS-переменные.

---

## 6. Запуск проекта

Структура не изменила поведение — `npm run dev` запускается без изменений.

```bash
# 1. Скопировать переменные окружения
cp .env.example .env
# Заполнить .env реальными SMTP-данными

# 2. Установить зависимости (если нужно)
npm install

# 3. Запустить dev-сервер
npm run dev

# 4. Продакшн-билд
npm run build
```

**Важно:** добавить новые статьи в блог теперь нужно только через `.md`-файлы в `content/blog/` — статические `.vue` файлы больше не нужны и не должны создаваться.

