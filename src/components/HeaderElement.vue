<script setup lang="ts">
import { useHeaderStore } from '../stores/counter'

const headerStore = useHeaderStore()
</script>

<template>
  <header class="header">
    <nav class="headerNav">
      <router-link to="/">
        <img src="../assets/homelogo.svg" alt="" />
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
          <button class="toggleThemeButton">
            <img src="../assets/moon.svg" alt="" />
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>
<style scoped>
.header {
  position: relative;
  height: 70px;
  display: flex;
  justify-content: center;
}

.headerNav {
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.headerUl {
  display: flex;
  flex-direction: row;
  
  align-items: center;
  justify-content: center;
  width: 100%;
}

.headerItemText {
  padding: 20px;
  font-weight: 400;
  font-size: 14px;
  font-weight: 600;
  list-style: 20px;
  font-style: normal;
  text-decoration: none;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.headerItemText:hover {
  color: #e2eee2;
}
.toggleThemeButton:hover{
  color: #e2eee2;
}

.toggleThemeButton {
  border: none;
  cursor: pointer;
}

</style>
