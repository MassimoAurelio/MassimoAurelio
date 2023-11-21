<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useHeaderStore } from '@/stores/useHeaderStore'
import { useThemeStore } from '@/stores/useThemeStore'
import moon from '@/assets/img/moon.svg'
import sun from '@/assets/img/sun.svg'
import mobileHeader from '@/components/header/MobileHeader.vue'

const headerStore = useHeaderStore()
const themeStore = useThemeStore()
const windowWidth = ref(window.innerWidth)

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth
}
onMounted(() => window.addEventListener('resize', updateWindowWidth))
onUnmounted(() => window.removeEventListener('resize', updateWindowWidth))

const isMobile = computed(() => windowWidth.value <= 800)
</script>

<template>
  <header class="desctopHeader" v-if="!isMobile">
    <nav class="headerNav">
      <router-link to="/">
        <img src="@/assets/img/homelogo.svg" alt="" />
      </router-link>
      <ul class="headerUl">
        <li v-for="item in headerStore.items" :key="item.label">
          <router-link :to="item.href" class="headerItemText">
            {{ item.label }}
          </router-link>
        </li>
      </ul>
      <div class="toggleThemeItem">
        <div class="relative">
          <button class="toggleThemeButton" @click="themeStore.toggleTheme">
            <img :src="themeStore.theme === 'light' ? sun : moon" alt="" />
          </button>
        </div>
      </div>
    </nav>
  </header>
  <header class="mobileHeader" v-else>
    <mobileHeader />
  </header>
</template>

<style lang="scss" scoped>
@import '@/assets/variables';
.desctopHeader {
  position: relative;
  height: 70px;
  display: flex;
  justify-content: center;

  .headerNav {
    width: 100%;
    padding: 2%;
    display: flex;
    justify-content: center;
    align-items: center;

    .headerUl {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;

      .headerItemText {
        padding: 20px;
        font-weight: 600;
        font-size: 0.875rem;
        line-height: 1.25rem;
        text-decoration: none;

        &:hover {
          color: #e2eee2;
        }
      }
    }

    .toggleThemeButton {
      border: none;
      outline: none;
      cursor: pointer;

      &:hover {
        color: #e2eee2;
      }

      &:focus {
        outline: none;
      }
    }
  }
}
</style>
