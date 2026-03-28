<template>
  <div>
    <NuxtPage>
      <template #default="{ Component }">
        <Transition name="page" mode="out-in" appear>
          <component :is="Component" />
        </Transition>
      </template>
    </NuxtPage>
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

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.18s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
