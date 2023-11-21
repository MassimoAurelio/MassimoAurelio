<script setup lang="ts">
import { useMyCompany } from '@/stores/useMyCompany'

const companyStore = useMyCompany()
</script>

<template>
  <section class="section">
    <h2 class="h2About">Work</h2>
    <div class="info">
      <p>2+ years of professional development experience.</p>
      <p>
        I started my career teaching others how to code, which I will always be appreciative of.
        Then I worked at a few small local companies.
      </p>
      <p>
        Now I'm a full stack engineer currently working at Hines, one of the largest private real
        estate investors in the world.
      </p>
      <ul class="company">
        <li class="companyButtons" v-for="item in companyStore.items" :key="item.label">
          <a class="a" :href="item.link"
            ><div class="companyValue">
              <img class="imgCompany" :src="item.imgSrc" alt="" />
              <div class="workInfo">
                <p>{{ item.position }}</p>
                <p>{{ item.label }}</p>
              </div>
            </div>
            <time class="text-secondary" datetime="">{{ item.time }}</time></a
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/variables';
</style>
