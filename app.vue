<template>
  <div>
    <NuxtPage />
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
