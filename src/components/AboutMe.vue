<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import MobileAboutMe from './MobileAboutMe.vue'
import { useMySocialsStore } from '@/stores/useMySocialsStore'
import { useMyCompany } from '@/stores/useMyCompany'
import { usePhotoStore } from '@/stores/usePhotoStore'

const socialsStore = useMySocialsStore()
const companyStore = useMyCompany()
const photoStore = usePhotoStore()

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
        <p class="just">Just a quick glimpse.</p>
      </div>
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
            <p>2+ years of professional development experience.</p>
            <p>
              I started my career teaching others how to code, which I will always be appreciative
              of. Then I worked at a few small local companies.
            </p>
            <p>
              Now I'm a full stack engineer currently working at Hines, one of the largest private
              real estate investors in the world.
            </p>
            <ul class="company">
              <li class="companyButtons" v-for="item in companyStore.items" :key="item.label">
                <a class="a" :href="item.link"
                  ><div class="companyValue">
                    <img class="imgCompany" :src="item.imgSrc" alt="" />
                    <div class="workInfo">
                      <p class="pos">{{ item.position }}</p>
                      <p class="lab">{{ item.label }}</p>
                    </div>
                  </div>
                  <time class="text-secondary" datetime="">{{ item.time }}</time></a
                >
              </li>
            </ul>
          </div>
        </section>
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
  height: 250vh;

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

    .flipping {
      position: relative;
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
  }
  .about {
    padding-top: 15vh;
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
        gap: 2rem;
        .company {
          display: flex;
          flex-direction: column;
          gap: 5vh;
          &:hover .companyButtons:not(:hover) {
            filter: brightness(60%);
            transition: filter 0.3s ease;
          }

          .companyButtons {
            display: flex;
            flex-direction: row;
            align-items: center;
            transition: filter 0.3s ease;
            gap: 10vh;
            width: 100%;
            .a {
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              flex-wrap: nowrap;
              font-weight: 700;
            }

            .companyValue {
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 3vh;
              width: 6vh;
              height: 7vh;

              .workInfo {
                display: flex;
                flex-direction: column;
                gap: 1vh;

                .lab {
                  color: #b4b4b4;
                  font-weight: 700;
                }
                .pos {
                  white-space: nowrap;
                  width: 100%;
                  font-weight: 700;
                  color: #eee;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
              }
            }
          }
        }
        .socials {
          display: flex;
          flex-direction: column;
          gap: 1vh;
          &:hover .socialsButtons:not(:hover) {
            filter: brightness(60%);
            transition: filter 0.3s ease;
          }
          .socialsButtons {
            border-width: 2px;
            border-style: solid;
            transition: filter 0.3s ease;
            border-color: #373737;
            padding: 4%;
            border-radius: 0.5rem;

            .socialsValue {
              font-weight: 700;
              color: #eee;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
            }
          }
        }
      }
    }
  }
}
</style>
