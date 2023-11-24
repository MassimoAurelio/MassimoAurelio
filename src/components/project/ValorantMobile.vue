<script setup lang="ts">
import { useProjectStore } from '@/stores/useProjectStore'
import { useTagsStore } from '@/stores/useTagsStore'
import { computed } from 'vue'

const projectStore = useProjectStore()
const tagsStore = useTagsStore()

const valorantValue = computed(() => {
  return projectStore.items.find((item) => item.label === 'VALORANT')
})
</script>

<template>
  <div class="mainContainer">
    <div class="firstContainer">
      <article v-if="valorantValue">
        <div class="block">
          <div class="smallBlock">
            <p>{{ valorantValue.time }}</p>
            <span>·</span>
            <a :href="valorantValue.gitHub">Visit Project</a>
          </div>
          <h1>{{ valorantValue.label }}</h1>
          <p>{{ valorantValue.description }}</p>
        </div>
        <div class="projectBlock"></div>
      </article>
      <div class="tagsContainer">
        <h2>Tags</h2>
        <div class="tags">
          <button class="tagsButton" v-for="tag in tagsStore.items" :key="tag.name">
            {{ tag.name }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/variables';
.mainContainer {
  height: 200vh;
  p {
    color: #6e6e6e;
  }

  .block {
    display: flex;
    flex-direction: column;
    gap: 4vh;
    .smallBlock {
      display: flex;
      flex-direction: row;
      gap: 2vh;
    }
  }
}
</style>
