<script setup lang="ts">
import { usePhotoStore } from '@/stores/usePhotoStore'

const photoStore = usePhotoStore()
</script>

<template>
  <section class="flipping">
    <div class="imgContainer">
      <div
        class="flip-container"
        v-for="(item, index) in photoStore.items"
        :key="item.imgSrc"
        :style="{
          transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 6}deg)`
        }"
      >
        <div
          class="flipper"
          :class="{ flipped: item.isFlipped }"
          @mouseover="item.isFlipped = true"
          @mouseleave="item.isFlipped = false"
        >
          <div class="front">
            <img :src="item.imgSrc" alt="img" />
          </div>
          <div class="back">
            <img :src="item.obratka" alt="img" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/variables';

.flipping {
  position: relative;
  margin-bottom: 20%;
  .imgContainer {
    display: flex;
    flex-direction: row;
    position: absolute;
    width: 110%;
    left: 50%;
    transform: translateX(-50%);
  }

  .flip-container {
    display: flex;
    width: 30vh;
    height: 20vh;
    margin-right: 5px;
    transform: rotate(-5deg);
  }

  .flipper {
    width: 100%;
    height: 50%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  .flipper.flipped {
    transform: rotateY(180deg);
  }

  .front,
  .back {
    width: 100%;
    height: 50%;
    position: absolute;
    backface-visibility: hidden;
  }

  .front {
    transform: rotateY(0deg);
    z-index: 2;
  }

  .back {
    transform: rotateY(180deg) translate(-10px, 10px);
    z-index: 1;
  }

  .flipped {
    transform: rotateY(180deg);
  }
}
</style>
