<template>
  <div>
    <NuxtPage />
    <CookieConsent />
  </div>
</template>

<script setup lang="ts">
// Initialize scroll animations globally after mount
const { observe } = useScrollAnimation()

onMounted(() => {
  // Re-run observer after full render to catch all [data-animate] elements
  nextTick(() => observe())
})
</script>
