<script setup lang="ts">
import { useMySocialsStore } from '../stores/useMySocialsStore'

const socialsStore = useMySocialsStore()
</script>

<template>
  <div class="mainContainer">
    <div class="firstContainer">
      <h1 class="nameSurname">Maxim Raikov</h1>
      <p class="smallInfo">I love write cod</p>
      <div class="myInfo">
        <img
          alt="avatar"
          loading="lazy"
          width="100"
          height="100"
          decoding="async"
          data-nimg="1"
          class="avatar"
          src="../assets/img/myphoto.jpg"
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
            ><img src="../assets/img/arrow.svg" alt="arrow" /><span>Email me</span></a
          >
        </li>
        <li class="transition-opacity">
          <router-link class="arrowImg" to="/links">
            <img src="../assets/img/arrow.svg" alt="arrow" /><span
              >More ways to connect</span
            ></router-link
          >
        </li>
      </ul>
    </div>
    <div class="seconContainer"></div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/variables';

.flex {
  display: flex;
}
.flex-row {
  @extend .flex;
  flex-direction: row;
}
.flex-column {
  @extend .flex;
  flex-direction: column;
}

.fade-in-color {
  transition: color 0.3s ease;
}

.mainContainer {
  position: relative;
  @extend .flex-column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  &.light a,
  &.light p,
  &.light span {
    color: #eeeeee;
  }

  @media only screen and (max-width: 800px) {
    padding-left: 2%;
    padding-right: 2%;
  }
}

.firstContainer {
  margin-top: 10%;
  @extend .flex-column;
  justify-content: flex-start;
  font-weight: $light-font-weight;
  width: 100%;
  padding: 5%;
}

.seconContainer {
  @extend .flex;
  justify-content: center;
  height: 50%;
  width: 100%;
}

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
  }
}

.socials {
  @extend .flex-row;
  align-items: center;
  margin-bottom: 5%;

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
