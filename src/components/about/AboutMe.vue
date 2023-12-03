<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import MobileAboutMe from '@/components/about/MobileAboutMe.vue'
import AboutWork from '@/components/about/AboutWork.vue'
import AboutConnect from '@/components/about/AboutConnect.vue'
import AboutFlipping from '@/components/about/AboutFlipping.vue'

const windowWidth = ref(window.innerWidth)

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth
}
onMounted(() => window.addEventListener('resize', updateWindowWidth))
onUnmounted(() => window.removeEventListener('resize', updateWindowWidth))

const isMobile = computed(() => windowWidth.value <= 800)
</script>

<template>
  <div class="mainContainer" v-if="!isMobile">
    <div class="firstContainer">
      <div class="firstInfo">
        <h1>About Me</h1>
        <p>Just a quick glimpse.</p>
      </div>
      <AboutFlipping />
      <div class="about">
        <section class="section">
          <h2 class="h2About">About</h2>
          <div class="info">
            <p>Hello world, I'm Maxim Raikov!</p>
            <p>
              I have a passion for design and am always looking for ways to incorporate it into my
              engineering work.
            </p>
           
          </div>
        </section>
        <AboutConnect />
        <AboutWork />
      </div>
    </div>
  </div>
  <div class="mobileAboutMe" v-else>
    <MobileAboutMe />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/variables';
.mainContainer {
  display: flex;
  height: auto;

  p {
    font-weight: 700;
  }

  a:hover {
    text-decoration: none;
  }
  .firstContainer {
    display: flex;
    flex-direction: column;
    gap: 5rem;

    .just {
      color: #b4b4b4;
      font-weight: 700;
    }
  }
}
</style>
