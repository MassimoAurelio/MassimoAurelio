import {} from 'vue'
import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('header', {
  state: () => ({
    items: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Gear', href: '/gear' },
      { label: 'Projects', href: '/projects' }
    ]
  })
})
