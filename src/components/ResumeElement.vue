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
              <a :href="item.link" target="_blank" rel="noopener noreferrer">{{ item.label }}</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="seconContainer">text2</div>
  </div>
</template>

<style scoped>
.mainContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 500px;
  padding-right: 500px;
  height: 800px;
}
.firstContainer {
  margin-top: 10%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: 50%;
  width: 100%;
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
  flex-direction: row;
  margin-top: 30px;
  margin-bottom: 30px;
}

.mainContainerSocials {
  margin-left: 20px;
  padding: 5px;
  display: flex;
  flex-direction: column;
}

.socials {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.class {
  border-radius: 50%;
}
</style>
