<script setup lang="ts">
import { useProjectStore } from '@/stores/useProjectStore.ts'

const projectStore = useProjectStore()
</script>

<template>
  <div class="mainContainer">
    <div class="firstContainer">
      <h1>Projects</h1>
      <p>Here are some of the projects I've worked on.</p>
      <ul class="company">
        <li class="companyButtons" v-for="item in projectStore.items" :key="item.label">
          <a class="a" :href="item.link"
            ><div class="companyValue">
              <img class="imgCompany" :src="item.imgSrc" alt="" />
              <div class="workInfo">
                <p>{{ item.label }}</p>
              </div>
            </div>
            <time class="text-secondary" datetime="">{{ item.time }}</time></a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/variables';
</style>
