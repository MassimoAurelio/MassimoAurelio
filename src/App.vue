<script setup lang="ts">
import HeaderVue from './components/HeaderElement.vue'
import { useThemeStore } from './stores/counter'

const themeStore = useThemeStore()
</script>

<template>
  <div :class="themeStore.theme">
    <HeaderVue />
    <router-view></router-view>
  </div>
</template>

<style scoped>
.light {
  background-color: #FCFCFC;
  color: #202020;
}

.dark * {
  background-color: #111111;
  color: #b4b4b4;
}

</style>
