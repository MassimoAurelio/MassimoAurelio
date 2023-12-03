<script setup lang="ts">
import { useMyCompany } from '@/stores/useMyCompany'

const companyStore = useMyCompany()
</script>

<template>
  <section class="section">
    <h2 class="h2About">Work</h2>
    <div class="info">
      <p>2+ years of professional experience.</p>
      <p>
        An Auto QA engineer, embarked on his professional journey in game development before
        successfully transitioning to web development.
      </p>
      <p>
        I began my professional journey in the field of gamedev, starting as a junior manual QA
        engineer. Subsequently, I successfully requalified into web development, a transition that
        brought me great satisfaction. Since the beginning of this year, I have held the position of
        full-stack QA, engaging in both manual and automated testing. Currently, I am actively
        pursuing further studies in web development. <a href="/stack">Learn more about the stack</a>
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
