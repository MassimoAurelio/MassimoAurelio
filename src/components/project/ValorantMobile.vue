<script setup lang="ts">
import { useProjectStore } from '@/stores/useProjectStore'
import { useTagsStore } from '@/stores/useTagsStore'
import { usePhotoStore } from '@/stores/usePhotoStore'
import { computed } from 'vue'

const projectStore = useProjectStore()
const tagsStore = useTagsStore()
const photoStore = usePhotoStore()

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
        <div class="projectBlock">
          <div class="imgBlock" v-for="item in photoStore.items" :key="item.imgSrc">
            <img :src="item.imgSrc" alt="" />
          </div>
        </div>
      </article>
      <div class="tagsContainer">
        <h2>Tags</h2>
        <div class="tags">
          <button class="tagsButton" v-for="tag in tagsStore.items" :key="tag.name">
            {{ tag.name }}
          </button>
        </div>
      </div>
      <div>
        <h2>Contacts</h2>
        <p>
          Need more project details, or interested in working together? Reach out to me directly at
        </p>
        <a href="" class="text-primary underline">massimoaureliowork@gmail.com</a>
      </div>
      <a href="/projects">← All Projects</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/variables';
.mainContainer {
  height: 261vh;
  p {
    color: #6e6e6e;
  }

  .firstContainer {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    article {
      display: flex;
      flex-direction: column;
      gap: 2rem;

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

    .tagsContainer {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 3vh;
      .tags {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 2vh;
        .tagsButton {
          padding: 1vh;
          border: none;
          border-radius: 7px;
          flex-basis: calc(33.33% - 20px);
        }
      }
    }

    .projectBlock {
      display: flex;
      flex-direction: column;
      gap: 3vh;
      width: 100%;
    }
  }
}
</style>
