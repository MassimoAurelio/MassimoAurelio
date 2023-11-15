<script setup lang="ts">
import { ref } from 'vue'
import { useHeaderStore } from '../stores/useHeaderStore'
import { useThemeStore } from '../stores/useThemeStore'
import moon from '../assets/img/moon.svg'
import sun from '../assets/img/sun.svg'

const headerStore = useHeaderStore()
const themeStore = useThemeStore()

const menu = ref(false)

const openMenu = () => {
  menu.value = !menu.value
}
</script>

<template>
  <nav class="headerNav">
    <router-link to="/">
      <img src="../assets/img/homelogo.svg" alt="" />
    </router-link>
    <div class="rightContent">
      <div class="menuWrapper">
        <button class="dropBoxButton" @click="openMenu">
          Menu <img src="../assets/img/plus.svg" alt="" />
        </button>
        <div class="dropBox" v-if="menu">
          <div class="headerUl">
            <a v-for="item in headerStore.items" :key="item.label" class="menu-item">
              <router-link :to="item.href" class="headerItemText">
                {{ item.label }}
              </router-link>
            </a>
          </div>
        </div>
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

<style lang="scss" scoped>
.headerNav {
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .headerUl {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 10%;

    .headerItemText {
      display: block;
      font-size: 17px;
      font-weight: 600;
      font-size: 1.1rem;
      line-height: 1.25rem;
      margin-bottom: 5%;
      margin-top: 5%; 
      text-decoration: none;
      width: 100%;

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
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  .menuWrapper {
    position: relative;
    margin-right: 5%;

    .dropBox {
      margin-top: 15%;
      text-align: left;
      right: 0;
      display: flex;
      justify-content: center;
      position: absolute;
      top: 100%;
      width: 10rem;
      height: 10rem;
      z-index: 1;
      background-color: #000000;
      border-radius: 10%;
    }

    .dropBoxButton {
      font-size: 17px;
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      color: #b4b4b4;
      background-color: #111111;
      border: none;
    }
  }
}
</style>
