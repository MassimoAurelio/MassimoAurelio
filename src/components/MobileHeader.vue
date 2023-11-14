<script setup lang="ts">
import { useHeaderStore } from '../stores/counter'
import { useThemeStore } from '../stores/counter'
import moon from '../assets/img/moon.svg'
import sun from '../assets/img/sun.svg'

const headerStore = useHeaderStore()
const themeStore = useThemeStore()
</script>

<template>
  <nav class="headerNav">
    <router-link to="/">
      <img src="../assets/img/homelogo.svg" alt="" />
    </router-link>
    <ul class="headerUl" v-show="false">
      <li v-for="item in headerStore.items" :key="item.label">
        <router-link :to="item.href" class="headerItemText">
          {{ item.label }}
        </router-link>
      </li>
    </ul>
    <div class="rightContent">
      <div class="dropBox">
        <button class="dropBoxButton">Menu <img src="../assets/img/plus.svg" alt="" /></button>
      </div>
      <div class="toggleThemeItem">
        <div class="relative">
          <button class="toggleThemeButton" @click="themeStore.toggleTheme">
            <img :src="themeStore.theme === 'light' ? sun : moon" alt="" />
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.headerNav {
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .headerUl {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;

    .headerItemText {
      padding: 10px;
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

.rightContent {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;

  .dropBoxButton {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #b4b4b4;
    background-color: #111111;
    border: none;
  }
  .dropBox {
    margin-right: 5%;
  }
}
</style>
