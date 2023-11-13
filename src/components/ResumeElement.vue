<script setup lang="ts">
import { useMySocialsStore } from '../stores/counter'

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
          src="../assets/myphoto.jpg"
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
            ><img src="../assets/arrow.svg" alt="arrow" /><span>Email me</span></a
          >
        </li>
        <li class="transition-opacity">
          <router-link class="arrowImg" to="/links">
            <img src="../assets/arrow.svg" alt="arrow" /><span
              >More ways to connect</span
            ></router-link
          >
        </li>
      </ul>
    </div>
    <div class="seconContainer"></div>
  </div>
</template>

<style scoped>
.mainContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.firstContainer {
  margin-top: 10%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  font-weight: 400;
  width: 100%;
  padding: 5%;
}

.seconContainer {
  display: flex;
  justify-content: center;
  height: 50%;
  width: 100%;
}

.smallInfo {
  color: #b4b4b4;
  font-weight: 500;
}

.myInfo {
  display: flex;
  font-weight: 400;
  flex-direction: row;
  margin-top: 3vh;
  margin-bottom: 3vh;
}

.mainContainerSocials {
  margin-left: 1vw;
  padding: 1vh;
  display: flex;
  flex-direction: column;
}

.socials {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5%;
}

.socialsName {
  margin-left: 10%;
  font-weight: 500;
  color: #b4b4b4;
  transition: color 0.3s ease;
}
.arrowImg {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2%;
}

.links {
  display: flex;
  flex-direction: column;
  margin-top: 3vh;
  margin-bottom: 3vh;
}

.myLittleDescription {
  padding-top: 3vh;
  padding-bottom: 3vh;
}

a.socialsName:hover,
a.arrowImg:hover {
  text-decoration: none;
}
.mainContainerSocials:hover .socialsName {
  color: #4f4f4f;
}

.mainContainerSocials .socials:hover .socialsName {
  color: #b4b4b4;
}
.links a {
  color: #b4b4b4;
  transition: color 0.3s ease;
}

.links:hover a {
  color: #4f4f4f;
}

.links li:hover a {
  color: #b4b4b4;
}

@media only screen and (max-width: 800px) {
  .mainContainer {
    padding-left: 2%;
    padding-right: 2%;
  }

  .mainContainerSocials {
    margin-left: 3vw;
    padding: 0.5vh;
  }
}
</style>
