<script setup lang="ts">
import { useProjectStore } from '@/stores/useProjectStore'

const projectStore = useProjectStore()
</script>

<template>
  <div class="mainContainer">
    <div class="firstContainer">
      <h1>Projects</h1>
      <div class="q">

        <p>Here are some of the projects I've worked on.</p>
        <ul class="project">
          <li class="projectButtons" v-for="item in projectStore.items" :key="item.label">
            <div class="projectValue">
              <a :href="item.link">
                <img class="imgProject" :src="item.imgSrc" alt="" />
              </a>
              <div class="underImg">
                <a class="nameProject" :href="item.link">{{ item.label }}</a>
                <time class="text-secondary" datetime=""> · {{ item.time }}</time>
              </div>
              <div>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </li>
        </ul>
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
  .q {
    display: flex;
    flex-direction: column;
    gap: 10vh;

    .project {
      display: flex;
      flex-direction: column;
      gap: 7vh;

      .projectValue {
        display: flex;
        flex-direction: column;
        gap: 2vh;
      }

      .underImg {
        display: flex;
        flex-direction: row;
        gap: 1vh;
      }
    }
  }
}
</style>
