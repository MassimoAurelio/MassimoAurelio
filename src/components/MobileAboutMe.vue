<script setup lang="ts">
import { useMySocialsStoreInAboutMe } from '../stores/useMySocialsStore'

const socialsStore = useMySocialsStoreInAboutMe()
</script>

<template>
  <div class="mainContainer">
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
        </section>
        <section class="thirdSection"></section>
      </div>
    </div>
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
    .h2About {
      font-size: 14px;
    }
    .about {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      .section {
        display: flex;
        flex-direction: column;
        gap: 2vh;
        .info {
          display: flex;
          flex-direction: column;
          gap: 3vh;
        }

        .socials {
          display: flex;
          flex-direction: column;
          gap: 2vh;

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
</style>
