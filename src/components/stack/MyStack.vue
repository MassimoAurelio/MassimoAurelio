<script setup lang="ts">
import { useTagsStore } from '@/stores/useTagsStore'
import { useAutomationStore } from '@/stores/useAutomationStore'

const tagsStore = useTagsStore()
const autoStore = useAutomationStore()
</script>

<template>
  <div class="mainContainer">
    <div class="firstContainer">
      <div class="description">
        <h1>STACK</h1>
        <p>
          Currently, I hold the position of QA AUTO, but I am actively delving into frontend
          development with the intention of transitioning from QA to web development.
        </p>
        <p>
          I am exclusively considering opportunities in the frontend domain and do not entertain
          offers in QA. In terms of test automation, I am proficient in Java, Selenium/Selenide,
          Maven, Gradle, TestNG/JUnit, and RestAssured.
        </p>
        <p>On the frontend side, my skill set encompasses JS/TS, Vue 3, Pinia, and SCSS.</p>
      </div>
      <div class="stack">
        <div class="automation">
          <h1>Automation</h1>
          <div class="tagsContainer">
            <div class="tags">
              <button class="tagsButton" v-for="auto in autoStore.items" :key="auto.name">
                {{ auto.name }}
              </button>
            </div>
          </div>
        </div>
        <div class="front">
          <h1>Frotend</h1>
          <div class="tagsContainer">
            <div class="tags">
              <button class="tagsButton" v-for="tag in tagsStore.items" :key="tag.name">
                {{ tag.name }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/variables';

.mainContainer {
  .firstContainer {
    @extend .flex-column;
    gap: 3vh;
    .stack {
      @extend .flex-column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 3vh;
      .automation {
        @extend .flex-column;
        gap: 2vh;
      }
      .front {
        @extend .flex-column;
        gap: 2vh;
      }
    }
  }
}
</style>
