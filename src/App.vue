<script setup lang="ts">
import HeaderVue from '@/components/header/HeaderElement.vue'

import { useThemeStore } from '@/stores/useThemeStore'

const themeStore = useThemeStore()
</script>

<template>
  <div :class="themeStore.theme">
    <HeaderVue />
    <transition name="slide-in-up">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style scoped>
.light {
  background-color: #fcfcfc;
  color: #202020;
}

.dark {
  background-color: #111111;
  color: #b4b4b4;
}

.slide-in-up-enter-active {
  transition: transform 0.5s ease-out;
}

.slide-in-up-leave-active {
  transition: transform 0.5s ease-in;
}

.slide-in-up-enter-from,
.slide-in-up-leave-to {
  transform: translateY(3%);
}

.slide-in-up-enter-to,
.slide-in-up-leave-from {
  transform: translateY(0);
}
</style>
