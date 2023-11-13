import {} from 'vue'
import { defineStore } from 'pinia'
import linkedIn from '../assets/linkedIn.svg'
import gitHub from '../assets/github.svg'

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

export const useMySocialsStore = defineStore('socials', {
  state: () => ({
    items: [
      { label: 'LinkedIn', link: 'https://www.linkedin.com/in/massimoaurelio/', imgSrc: linkedIn },
      {
        label: 'GitHub',
        link: 'https://github.com/MassimoAurelio',
        imgSrc: gitHub
      }
    ]
  })
})

export const useThemeStore = defineStore({
  id: 'theme',
  state: () => ({
    theme: 'light'
  }),
  actions: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
    }
  }
})
