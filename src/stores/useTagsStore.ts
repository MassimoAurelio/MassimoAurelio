import { defineStore } from 'pinia'

export const useTagsStore = defineStore('tags', {
  state: () => ({
    items: [
      { name: 'Vue.js' },
      { name: 'TypeScript' },
      { name: 'SCSS' },
      { name: 'CSS' },
      { name: 'HTML' },
      { name: 'JavaScript' }
    ]
  })
})
