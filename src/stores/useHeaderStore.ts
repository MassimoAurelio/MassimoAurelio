import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('header', {
  state: () => ({
    items: [
      { label: 'About', href: '/about' },
      { label: 'Projects', href: '/projects' }
    ]
  })
})
