<template>
  <div style="background: var(--surface); min-height: 100vh; display: flex; flex-direction: column;">
    <Header />
    <main style="flex: 1; display: flex; align-items: center; justify-content: center; padding: 80px 20px;">
      <div style="text-align: center; max-width: 520px;">

        <!-- Error code -->
        <div style="font-family: 'Syne Mono', monospace; font-size: clamp(5rem, 15vw, 9rem); font-weight: 400; color: var(--accent); line-height: 1; margin-bottom: 16px; letter-spacing: -0.05em;">
          {{ error?.statusCode || 404 }}
        </div>

        <!-- Title -->
        <h1 style="font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(1.5rem, 4vw, 2.2rem); color: var(--ink); letter-spacing: -0.03em; margin-bottom: 16px; line-height: 1.1;">
          {{ error?.statusCode === 500 ? 'Ошибка сервера' : 'Страница не найдена' }}
        </h1>

        <!-- Description -->
        <p style="color: var(--ink-3); font-size: 1rem; line-height: 1.7; margin-bottom: 40px; max-width: 400px; margin-left: auto; margin-right: auto;">
          {{ error?.statusCode === 500
            ? 'Что-то пошло не так на сервере. Мы уже работаем над этим.'
            : 'Такой страницы не существует. Возможно, она была перемещена или удалена.'
          }}
        </p>

        <!-- Actions -->
        <div style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: center;">
          <button class="btn-primary" @click="handleError">
            ← На главную
          </button>
          <a
            href="https://t.me/bugaev_web"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-outline"
          >
            Написать в Telegram
          </a>
        </div>

        <!-- Quick nav -->
        <div style="margin-top: 48px; padding-top: 32px; border-top: 1px solid var(--border);">
          <p style="color: var(--ink-3); font-size: 0.8rem; margin-bottom: 16px; font-family: 'Syne Mono', monospace; letter-spacing: 0.08em; text-transform: uppercase;">Полезные страницы</p>
          <div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
            <NuxtLink to="/" class="badge" style="text-decoration: none; cursor: pointer;">Главная</NuxtLink>
            <NuxtLink to="/uslugi" class="badge" style="text-decoration: none; cursor: pointer;">Услуги</NuxtLink>
            <NuxtLink to="/blog" class="badge" style="text-decoration: none; cursor: pointer;">Блог</NuxtLink>
            <NuxtLink to="/smm-salon-krasoty" class="badge" style="text-decoration: none; cursor: pointer;">SMM</NuxtLink>
            <NuxtLink to="/sait-salon-krasoty" class="badge" style="text-decoration: none; cursor: pointer;">Сайт</NuxtLink>
            <NuxtLink to="/telegram-bot-zapis" class="badge" style="text-decoration: none; cursor: pointer;">Telegram-бот</NuxtLink>
          </div>
        </div>

      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ error: { statusCode: number; statusMessage?: string } | null }>()

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>
