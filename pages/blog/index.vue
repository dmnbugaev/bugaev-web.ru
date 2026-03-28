<template>
  <div style="background: var(--surface);">
    <Header />
    <main class="pt-28 pb-20">
      <div class="section-container">

        <div class="mb-16">
          <span class="badge mb-5">Блог</span>
          <h1 class="section-title mb-5">Статьи о продвижении<br><span style="color: var(--accent);">бьюти-бизнеса</span></h1>
          <p class="section-subtitle max-w-2xl">
            Практические руководства, разбор инструментов и реальные цифры — для владельцев салонов красоты, ногтевых студий и косметологических кабинетов в Москве.
          </p>
        </div>

        <div class="h-px mb-16" style="background: var(--border);" />

        <section aria-label="Статьи блога Бугаев Веб">
          <p v-if="!articles?.length" style="color: var(--ink-3); text-align: center; padding: 48px 0;">
            Статьи скоро появятся. Следите за обновлениями.
          </p>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <NuxtLink
              v-for="article in articles"
              :key="article._path"
              :to="article._path"
              class="card p-7 flex flex-col"
              style="text-decoration: none;"
            >
              <div class="flex items-center gap-2 mb-4">
                <span class="badge" style="font-size: 0.65rem;">{{ article.badge }}</span>
                <span style="color: var(--ink-3); font-size: 0.75rem; font-family: 'Syne Mono', monospace;">{{ article.date }}</span>
              </div>
              <h2 style="font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.15rem; line-height: 1.3; color: var(--ink); margin-bottom: 12px; letter-spacing: -0.02em; flex: 1;">
                {{ article.headline }}
              </h2>
              <p style="color: var(--ink-3); font-size: 0.875rem; line-height: 1.6; margin-bottom: 20px;">
                {{ article.description }}
              </p>
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <span style="color: var(--ink-3); font-size: 0.75rem; font-family: 'Syne Mono', monospace;">{{ article.readTime }} чтения</span>
                <span style="color: var(--accent-text); font-size: 0.85rem; font-weight: 600;">Читать →</span>
              </div>
            </NuxtLink>

          </div>
        </section>

        <div class="h-px my-20" style="background: var(--border);" />

        <section style="background: var(--ink); border-radius: 20px; padding: 56px 40px; text-align: center;">
          <h2 style="font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(1.5rem, 3vw, 2.2rem); color: #fff; margin-bottom: 12px;">Хватит читать — начните привлекать клиентов</h2>
          <p style="color: rgba(255,255,255,0.5); margin-bottom: 32px; max-width: 460px; margin-left: auto; margin-right: auto;">Бесплатный аудит вашего digital-присутствия. Покажем, что мешает росту и что можно улучшить прямо сейчас.</p>
          <NuxtLink to="/#form" class="btn-accent">Получить аудит бесплатно</NuxtLink>
        </section>

      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const { data: articles } = await useAsyncData('blog-list', () =>
  queryContent('/blog').sort({ isoDate: -1 }).find()
)

useSeoMeta({
  title: 'Блог о продвижении салонов красоты — Бугаев Веб | Статьи и советы',
  description: 'Практические статьи о привлечении клиентов в салон красоты, ногтевую студию и косметологический кабинет. SMM, SEO, Telegram-бот, CRM YCLIENTS — реальные инструменты и цифры.',
  ogTitle: 'Блог Бугаев Веб — Продвижение бьюти-бизнеса',
  ogDescription: 'Статьи о SMM, SEO, Telegram-ботах и CRM для салонов красоты в Москве. Практические руководства с реальными цифрами.',
  ogUrl: 'https://bugaev-web.ru/blog',
  ogType: 'website',
  ogLocale: 'ru_RU',
  ogSiteName: 'Бугаев Веб',
  ogImage: 'https://bugaev-web.ru/og-image.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Блог о продвижении салонов красоты — Бугаев Веб',
  twitterDescription: 'Практические статьи о привлечении клиентов в бьюти-бизнес.',
  twitterImage: 'https://bugaev-web.ru/og-image.jpg',
})

useHead({
  htmlAttrs: { lang: 'ru' },
  link: [{ rel: 'canonical', href: 'https://bugaev-web.ru/blog' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Блог Бугаев Веб — Digital-продвижение для бьюти-бизнеса',
        description: 'Практические статьи о привлечении клиентов в салон красоты: SMM, SEO, Telegram-боты, CRM YCLIENTS',
        url: 'https://bugaev-web.ru/blog',
        publisher: { '@id': 'https://bugaev-web.ru/#business' },
        inLanguage: 'ru-RU',
        blogPost: (articles.value ?? []).map(a => ({
          '@type': 'BlogPosting',
          headline: a.schemaHeadline ?? a.headline,
          url: 'https://bugaev-web.ru' + a._path,
          datePublished: a.isoDate,
        })),
      }),
    },
  ],
})
</script>
