import { defineStore } from 'pinia'
import pinia from '@/assets/img/pinia.svg'
import html from '@/assets/img/html.svg'
import ts from '@/assets/img/ts.svg'
import scss from '@/assets/img/scss.svg'
import js from '@/assets/img/js.svg'
import vue from '@/assets/img/vue.svg'

export const useTagsStore = defineStore('tags', {
  state: () => ({
    items: [
      { name: 'Vue.js', imgSrc: vue },
      { name: 'TypeScript', imgSrc: ts },
      { name: 'SCSS', imgSrc: scss },
      { name: 'CSS' },
      { name: 'HTML', imgSrc: html },
      { name: 'JavaScript', imgSrc: js }
    ]
  })
})
