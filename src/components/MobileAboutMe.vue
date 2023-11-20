<script setup lang="ts">
import { useMySocialsStoreInAboutMe } from '../stores/useMySocialsStore'
import { useMyCompany } from '@/stores/useMyCompany'

const socialsStore = useMySocialsStoreInAboutMe()
const companyStore = useMyCompany()
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
</template>

<style lang="scss" scoped>
@import '../assets/variables';
.mainContainer {
  display: flex;
  height: 300vh;
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
      gap: 4rem;
      .section {
        display: flex;
        flex-direction: column;
        gap: 2vh;
        .info {
          display: flex;
          flex-direction: column;
          gap: 3vh;

          .company {
            display: flex;
            flex-direction: column;
            gap: 5vh;
            margin-top: 4%;
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
              font-weight: 700;
              color: #eee;
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