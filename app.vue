<template>
  <div>
    <NuxtPage>
      <template #default="{ Component }">
        <Transition name="page" mode="out-in" appear>
          <component :is="Component" />
        </Transition>
      </template>
    </NuxtPage>
    <StickyTelegramCTA />
    <CookieConsent />
  </div>
</template>

<script setup lang="ts">
const { observe } = useScrollAnimation()
const router = useRouter()

onMounted(() => {
  nextTick(() => observe())
})

router.afterEach(() => {
  nextTick(() => observe())
})
</script>

