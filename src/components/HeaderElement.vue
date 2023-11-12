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
    </nav>
  </header>
</template>
<style scoped>
.header {
  position: relative;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
}

.headerNav {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.headerUl {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.headerItemText {
  padding: 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.headerItemText:hover {
  color: #e2eee2;
}
</style>
