<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import MobileAboutMe from './MobileAboutMe.vue'
import { useMySocialsStore } from '../stores/useMySocialsStore'

const socialsStore = useMySocialsStore()

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
      <div class="imgContainer">
        <img src="../assets/img/myphoto.jpg" alt="" />
      </div>
      <div class="about">
        <section class="section">
          <h2 class="h2About">About</h2>
          <div class="info">
            <p>Hello world, I'm Maxim Raikov!</p>
            <p>
              I have a passion for design and am always looking for ways to incorporate it into my
              engineering work.
            </p>
            <p>
              When I'm not at my desk I am probably lifting weights, playing soccer, or at a coffee
              shop :)
            </p>
          </div>
        </section>
        <section class="section">
          <h2 class="h2About">Connect</h2>
          <div class="info">
            <p>
              Have a question or just want to chat? Feel free to
              <a class="underline-offset-4 underline" target="_blank" href="mailto:contact@b-r.io"
                >email me</a
              >. Try finding me anywhere else at @massimoaurelio
            </p>
            <ul class="socials">
              <li class="socialsButtons" v-for="item in socialsStore.items" :key="item.label">
                <a :href="item.link"
                  ><div class="socialsValue">
                    <span class="text-xl"><img :src="item.imgSrc" alt="" /></span>{{ item.label }}
                    <img src="../assets/img/arrow.svg" alt="" /></div
                ></a>
              </li>
            </ul>
          </div>
        </section>
        <section class="section">
          <h2 class="h2About">Work</h2>
          <div class="info">
            <p>4+ years of professional development experience.</p>
            <p>
              I started my career teaching others how to code, which I will always be appreciative
              of. Then I worked at a few small local companies.
            </p>
            <p>
              Now I'm a full stack engineer currently working at Hines, one of the largest private
              real estate investors in the world.
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>
  <div class="mobileHeader" v-else>
    <MobileAboutMe />
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/variables';
.mainContainer {
  display: flex;
  height: 500vh;
  .firstContainer {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    .imgContainer {
      width: 40vh;
      height: 40vh;
    }
    .about {
      display: flex;
      flex-direction: column;
      gap: 5rem;
      .section {
        display: flex;
        justify-content: space-between;
        gap: 2rem;
        .h2About {
          width: 10rem;
          font-size: 14px;
        }
        .info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          .socials {
            display: flex;
            flex-direction: column;
            gap: 1vh;

            .socialsButtons {
              border-width: 2px;
              border-style: solid;
              border-color: #373737;
              padding: 4%;
              border-radius: 0.5rem;
              .socialsValue {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
              }
            }
          }
        }
      }
    }
  }
}
</style>
