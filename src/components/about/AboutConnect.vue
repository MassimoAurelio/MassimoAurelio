<script setup lang="ts">
import { useMySocialsStore } from '@/stores/useMySocialsStore'

const socialsStore = useMySocialsStore()
</script>

<template>
  <section class="section">
    <h2 class="h2About">Connect</h2>
    <div class="info">
      <p>
        Have a question or just want to chat? Feel free to
        <a class="underline-offset-4 underline" href="mailto:massimoaureliowork@gmail.com"
          >email me</a
        >. Try finding me anywhere else at @massimoaurelio
      </p>
      <ul class="socials">
        <li class="socialsButtons" v-for="item in socialsStore.items" :key="item.label">
          <a :href="item.link"
            ><div class="socialsValue">
              <span class="text-xl"><img :src="item.imgSrc" alt="" /></span>
              <p>{{ item.label }}</p>
              <img src="@/assets/img/arrow.svg" alt="" /></div
          ></a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/variables';
</style>
