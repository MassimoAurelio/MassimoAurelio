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
        <ul>
          <li v-for="item in socialsStore.items" :key="item.label">
            <a :href="item.link"
              ><div>
                <span><img :src="item.imgSrc" alt="" /></span><img src="" alt="" />{{ item.label }}
              </div></a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/variables';

.content {
  max-width: 100%;
  height: auto;
  @extend .flex-column;
  justify-content: center;
  align-items: center;
  gap: 3vh;

  p {
    padding: 3%;
  }
  .avatar {
    width: 20vh;
  }
  .description {
    padding-left: 3%;
    padding-right: 3%;
    @extend .flex-column;
    justify-content: center;
    align-items: center;
  }
}
</style>
