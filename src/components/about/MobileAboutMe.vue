<script setup lang="ts">
import AboutWork from '@/components/about/AboutWork.vue'
import AboutConnect from '@/components/about/AboutConnect.vue'
</script>

<template>
  <div class="mainContainer">
    <div class="firstContainer">
      <div class="firstInfo">
        <h1>About Me</h1>
        <p>Just a quick glimpse.</p>
      </div>
      <div class="img">
        <div class="imgContainer">
          <img src="@/assets/img/cat.png" alt="" />
        </div>
        <div class="imgContainer">
          <img src="@/assets/img/cat.png" alt="" />
        </div>
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
        <AboutConnect />
        <AboutWork />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/variables';
.mainContainer {
  display: flex;

  .firstContainer {
    display: flex;
    flex-direction: column;
    gap: 5rem;

    .about {
      margin-top: 10%;
    }

    .img {
      margin-bottom: 8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 100%;

      .imgContainer {
        position: absolute;
        top: 0;
        width: 25vh;
        height: 25vh;

        &:first-child {
          left: 0;
          z-index: 1;

          img {
            transform: rotate(-15deg);
          }
        }

        &:last-child {
          right: 0;
          z-index: 2;

          img {
            transform: rotate(10deg);
          }
        }
      }
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
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  gap: 1vh;
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
</style>
