<script setup lang="ts">
import { useTagsStore } from '../../stores/useTagsStore'

const tagsStore = useTagsStore()
</script>

<template>
  <section class="section">
    <h2 class="h2About">Work</h2>
    <div class="mainContainer">
      <div class="firstContainer">
        <ul class="technology">
          <li class="companyButtons" v-for="item in tagsStore.items" :key="item.name">
            
            <a class="a" :href="item.name"
              ><div class="companyValue">
                <img class="imgCompany" :src="item.imgSrc" alt="" />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/variables';
.section {
  height: auto;
}
</style>
