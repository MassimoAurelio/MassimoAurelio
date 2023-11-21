<script setup lang="ts">
import { useMySocialsStore } from '@/stores/useMySocialsStore'
import arrow from '@/assets/img/arrow.svg'
const socialsStore = useMySocialsStore()
</script>

<template>
  <div class="mainContainer">
    <div class="firstContainer">
      <h1>Maxim Raikov</h1>
      <p>I love write cod</p>
      <div class="myInfo">
        <img
          alt="avatar"
          loading="lazy"
          width="100"
          height="100"
          decoding="async"
          data-nimg="1"
          class="avatar"
          src="@/assets/img/myphoto.jpg"
          style="color: transparent"
        />
        <ul class="mainContainerSocials">
          <li v-for="item in socialsStore.items" :key="item.label">
            <div class="socials">
              <img :src="item.imgSrc" alt="logo" />
              <a class="socialsName" :href="item.link" target="_blank" rel="noopener noreferrer">{{
                item.label
              }}</a>
            </div>
          </li>
        </ul>
      </div>
      <div class="description">
        <p>Hi, I'm Maxim Raikov, a software engineer who loves building cool things with code.</p>
      </div>
      <ul class="links">
        <li class="transition-opacity">
          <a class="arrowImg" target="_blank" href="massimoaureliowork@gmail.com"
            ><img :src="arrow" alt="arrow" /><span>Email me</span></a
          >
        </li>
        <li class="transition-opacity">
          <router-link class="arrowImg" to="/links">
            <img :src="arrow" alt="arrow" />
            <span>More ways to connect</span></router-link
          >
        </li>
      </ul>
    </div>
    <div class="seconContainer"></div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/variables';

.smallInfo {
  color: $light-grey;
  font-weight: $medium-font-weight;
}

.myInfo {
  @extend .flex-row;
  font-weight: $light-font-weight;
  margin-top: 3vh;
  margin-bottom: 3vh;
}

.mainContainerSocials {
  margin-left: 1vw;
  padding: 1vh;
  @extend .flex-column;

  &:hover .socialsName {
    color: $black-grey;
  }

  .socials:hover .socialsName {
    color: $light-grey;
    text-decoration: none;
  }
}

.socials {
  @extend .flex-row;
  align-items: center;
  margin-bottom: 5%;
  gap: 5%;
  font-weight: 700;

  .socialsName {
    margin-left: 10%;
    font-weight: $medium-font-weight;
    color: $light-grey;
    @extend .fade-in-color;
  }
}

.arrowImg {
  @extend .flex-row;
  align-items: center;
  margin-bottom: 2%;
}

.links {
  @extend .flex-column;
  margin-top: 3vh;
  margin-bottom: 3vh;

  a {
    color: $light-grey;
    @extend .fade-in-color;

    &:hover {
      text-decoration: none;
    }
  }

  &:hover a {
    color: $black-grey;
  }

  li:hover a {
    color: $light-grey;
  }
}
</style>
