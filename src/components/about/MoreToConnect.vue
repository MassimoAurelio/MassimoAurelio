<script setup lang="ts">
import { useMySocialsStore } from '@/stores/useMySocialsStore'

const socialsStore = useMySocialsStore()
</script>

<template>
  <div class="mainContainer">
    <div class="firstContainer">
      <div class="content">
        <div class="avatar">
          <img src="@/assets/img/myphoto.jpg" alt="avatar" />
        </div>
        <div class="description">
          <h1>Maxim Raikov</h1>
          <p>Software engineer who loves building cool things with code</p>
        </div>
      </div>

      <div class="socialButtons">
        <ul class="ul">
          <li class="button" v-for="item in socialsStore.items" :key="item.label">
            <a class="link" :href="item.link" target="_blank">
              <div class="buttonValue">
                <span><img :src="item.imgSrc" alt="" /></span>{{ item.label }}
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/variables';

.firstContainer {
  @extend .flex-column;
  gap: 3vh;

  .content {
    max-width: 100%;
    height: auto;
    padding: 3vh;
    @extend .flex-column;
    justify-content: center;
    align-items: center;
    gap: 3vh;

    .avatar {
      width: 20vh;
    }
    .description {
      padding-left: 5%;
      padding-right: 5%;
      @extend .flex-column;
      justify-content: center;
      align-items: center;
    }
  }

  .socialButtons {
    width: 100%;
    @extend .flex-column;
    .ul {
      @extend .flex-column;
      gap: 2vh;

      .button {
        width: 100%;
        @extend .flex-row;
        align-items: center;
        background-color: #222222;
        border-radius: 8px;
        height: 5vh;
        padding-left: 1vh;
        .link {
          display: block;
          text-decoration: none;
          color: inherit;
        }

        .buttonValue {
          width: 100%;
          @extend .flex-row;
          align-items: center;
          gap: 1vh;
        }
      }
    }
  }
}
</style>
