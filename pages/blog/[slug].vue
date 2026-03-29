<template>
  <div style="background: var(--surface);">
    <Header />
    <main class="pt-28 pb-20">
      <div class="section-container">

        <!-- Breadcrumbs -->
        <nav
          aria-label="Хлебные крошки"
          style="margin-bottom: 32px; font-size: 0.8rem; color: var(--ink-3); display: flex; align-items: center; gap: 6px; flex-wrap: wrap;"
        >
          <NuxtLink to="/" style="color: var(--ink-3); text-decoration: none;">Главная</NuxtLink>
          <span>→</span>
          <NuxtLink to="/blog" style="color: var(--ink-3); text-decoration: none;">Блог</NuxtLink>
          <span>→</span>
          <span style="color: var(--ink);">{{ article?.breadcrumb }}</span>
        </nav>

        <div class="grid lg:grid-cols-[1fr_300px] gap-16 items-start">

          <!-- Main content -->
          <article>

            <header style="margin-bottom: 48px;">
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; flex-wrap: wrap;">
                <span class="badge">{{ article?.badge }}</span>
                <span style="color: var(--ink-3); font-size: 0.8rem; font-family: 'Syne Mono', monospace;">{{ article?.date }}</span>
                <span style="color: var(--ink-3); font-size: 0.8rem; font-family: 'Syne Mono', monospace;">· {{ article?.readTime }} чтения</span>
              </div>
              <h1 style="font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(1.75rem, 4vw, 2.8rem); line-height: 1.1; color: var(--ink); letter-spacing: -0.03em; margin-bottom: 20px;">
                {{ article?.headline }}
              </h1>
              <p style="font-size: 1.1rem; color: var(--ink-3); line-height: 1.7; max-width: 680px;">
                {{ article?.subheadline }}
              </p>
            </header>

            <div class="h-px mb-10" style="background: var(--border);" />

            <ContentRenderer v-if="article" :value="article" class="article-body" />

            <div class="h-px my-12" style="background: var(--border);" />

            <!-- Author -->
            <div style="display: flex; align-items: center; gap: 16px; padding: 24px; background: var(--surface-warm); border-radius: 16px; margin-bottom: 32px;">
              <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--accent); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
                  <path d="M4 14L9 3L14 14H4Z" fill="var(--ink)" />
                  <circle cx="9" cy="9.5" r="1.8" fill="var(--ink)" />
                </svg>
              </div>
              <div>
                <strong style="display: block; color: var(--ink); font-size: 0.9rem;">Бугаев Дмитрий</strong>
                <span style="color: var(--ink-3); font-size: 0.8rem;">Основатель Бугаев Веб — digital-продвижение для бьюти-бизнеса</span>
              </div>
            </div>

            <!-- CTA -->
            <div style="background: var(--ink); border-radius: 20px; padding: 40px; text-align: center;">
              <h3 style="font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.5rem; color: #fff; margin-bottom: 8px;">{{ article?.ctaTitle }}</h3>
              <p style="color: rgba(255,255,255,0.5); margin-bottom: 24px; font-size: 0.9rem;">{{ article?.ctaText }}</p>
              <NuxtLink to="/#contact" class="btn-accent">{{ article?.ctaBtn }}</NuxtLink>
            </div>

          </article>

          <!-- Sidebar -->
          <aside style="position: sticky; top: 100px;">

            <!-- Standard TOC (when no custom widget) -->
            <template v-if="!article?.sidebarWidget || article.sidebarWidget.type === 'toc'">
              <div
                v-if="tocLinks.length"
                style="background: var(--surface-warm); border-radius: 16px; padding: 28px; margin-bottom: 24px;"
              >
                <h3 style="font-weight: 700; font-size: 0.9rem; margin-bottom: 16px; color: var(--ink);">Содержание</h3>
                <nav>
                  <ol style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px;">
                    <li v-for="(item, idx) in tocLinks" :key="item.id">
                      <a
                        :href="'#' + item.id"
                        style="color: var(--ink-3); text-decoration: none; font-size: 0.85rem; line-height: 1.4;"
                      >{{ (idx + 1) + '. ' + item.text }}</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </template>

            <!-- Price table widget -->
            <template v-else-if="article.sidebarWidget.type === 'price-table'">
              <div style="background: var(--surface-warm); border-radius: 16px; padding: 28px; margin-bottom: 24px;">
                <h3 style="font-weight: 700; font-size: 0.9rem; margin-bottom: 16px; color: var(--ink);">{{ article.sidebarWidget.title }}</h3>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                  <div
                    v-for="item in article.sidebarWidget.items"
                    :key="item.label"
                    style="display: flex; justify-content: space-between; align-items: center; padding: 12px; border-radius: 10px;"
                    :style="item.highlight
                      ? 'background: var(--accent-dim); border: 1px solid rgba(143,175,138,0.22);'
                      : 'background: #fff;'"
                  >
                    <span style="font-size: 0.8rem;" :style="item.highlight ? 'color: var(--ink);' : 'color: var(--ink-3);'">{{ item.label }}</span>
                    <span style="font-weight: 700;" :style="item.highlight ? 'font-size: 0.9rem; font-weight: 800; color: var(--accent-text);' : 'font-size: 0.85rem; color: var(--ink);'">{{ item.value }}</span>
                  </div>
                </div>
              </div>
            </template>

            <!-- Steps widget -->
            <template v-else-if="article.sidebarWidget.type === 'steps'">
              <div style="background: var(--surface-warm); border-radius: 16px; padding: 28px; margin-bottom: 24px;">
                <h3 style="font-weight: 700; font-size: 0.9rem; margin-bottom: 16px; color: var(--ink);">{{ article.sidebarWidget.title }}</h3>
                <ol style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px;">
                  <li
                    v-for="(step, idx) in article.sidebarWidget.items"
                    :key="idx"
                    style="display: flex; gap: 10px;"
                  >
                    <span style="flex-shrink: 0; width: 22px; height: 22px; background: var(--accent-dim); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 700; color: var(--accent-text); font-family: 'Syne Mono', monospace;">{{ idx + 1 }}</span>
                    <span style="color: var(--ink-3); font-size: 0.8rem; line-height: 1.5;">{{ step }}</span>
                  </li>
                </ol>
              </div>
            </template>

            <!-- Sidebar CTA -->
            <div style="background: var(--accent-dim); border: 1px solid rgba(143,175,138,0.22); border-radius: 16px; padding: 28px; margin-bottom: 24px;">
              <h3 style="font-weight: 700; font-size: 0.9rem; margin-bottom: 8px; color: var(--ink);">{{ article?.sidebarCtaTitle }}</h3>
              <p style="color: var(--ink-3); font-size: 0.8rem; line-height: 1.6; margin-bottom: 16px;">{{ article?.sidebarCtaText }}</p>
              <NuxtLink to="/#contact" class="btn-primary" style="width: 100%; justify-content: center; display: flex;">Оставить заявку</NuxtLink>
            </div>

            <!-- Related links -->
            <div v-if="article?.related?.length" style="background: var(--surface-warm); border-radius: 16px; padding: 28px;">
              <h3 style="font-weight: 700; font-size: 0.9rem; margin-bottom: 16px; color: var(--ink);">Читать также</h3>
              <div style="display: flex; flex-direction: column; gap: 12px;">
                <NuxtLink
                  v-for="link in article.related"
                  :key="link.to"
                  :to="link.to"
                  style="color: var(--ink-3); text-decoration: none; font-size: 0.85rem; line-height: 1.4; display: flex; align-items: flex-start; gap: 8px;"
                >
                  <span style="flex-shrink: 0; color: var(--accent);">→</span>
                  {{ link.text }}
                </NuxtLink>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const { data: article } = await useAsyncData('blog-' + slug, () =>
  queryContent('/blog/' + slug).findOne()
)

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Статья не найдена' })
}

// TOC links from parsed content
const tocLinks = computed(() =>
  (article.value?.body?.toc?.links ?? []) as Array<{ id: string; text: string }>
)

// SEO
useSeoMeta({
  title: article.value?.title,
  description: article.value?.description,
  ogTitle: article.value?.ogTitle,
  ogDescription: article.value?.ogDescription,
  ogUrl: article.value?.canonical,
  ogType: 'article',
  ogLocale: 'ru_RU',
  ogSiteName: 'Бугаев Веб',
  ogImage: 'https://bugaev-web.ru/og-image.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: article.value?.ogTitle,
  twitterDescription: article.value?.ogDescription,
  twitterImage: 'https://bugaev-web.ru/og-image.jpg',
})

useHead({
  htmlAttrs: { lang: 'ru' },
  link: [{ rel: 'canonical', href: article.value?.canonical }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Article',
            headline: article.value?.schemaHeadline ?? article.value?.headline,
            description: article.value?.schemaDescription ?? article.value?.description,
            author: {
              '@type': 'Person',
              name: 'Бугаев Дмитрий',
              url: 'https://bugaev-web.ru/#founder',
            },
            publisher: { '@id': 'https://bugaev-web.ru/#business' },
            datePublished: article.value?.isoDate,
            dateModified: article.value?.isoDate,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': article.value?.canonical,
            },
            url: article.value?.canonical,
            inLanguage: 'ru-RU',
            about: article.value?.schemaAbout
              ? { '@type': 'Thing', name: article.value.schemaAbout }
              : undefined,
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://bugaev-web.ru/' },
              { '@type': 'ListItem', position: 2, name: 'Блог', item: 'https://bugaev-web.ru/blog' },
              {
                '@type': 'ListItem',
                position: 3,
                name: article.value?.breadcrumb,
                item: article.value?.canonical,
              },
            ],
          },
        ],
      }),
    },
  ],
})
</script>

<style scoped>
:deep(.article-body) {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--ink-2);
  max-width: 720px;
}
:deep(.article-body p) {
  margin-bottom: 1.25rem;
}
:deep(.article-body h2) {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  color: var(--ink);
  letter-spacing: -0.02em;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1.2;
}
:deep(.article-body ul),
:deep(.article-body ol) {
  padding-left: 1.5rem;
  margin-bottom: 1.25rem;
}
:deep(.article-body li) {
  margin-bottom: 0.5rem;
}
:deep(.article-body strong) {
  color: var(--ink);
  font-weight: 700;
}
:deep(.article-body a) {
  color: var(--accent-text);
  text-decoration: underline;
  text-underline-offset: 3px;
}
:deep(.article-body a:hover) {
  color: var(--ink);
}
</style>
