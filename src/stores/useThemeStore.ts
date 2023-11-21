import { defineStore } from 'pinia'

export const useThemeStore = defineStore({
  id: 'theme',
  state: () => ({
    theme: localStorage.getItem('theme') || 'dark'
  }),
  actions: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', this.theme)
      if (this.theme === 'light') {
        this.setLightTheme()
      } else {
        this.setDarkTheme()
      }
    },
    initializeTheme() {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
        this.theme = savedTheme
        if (this.theme === 'light') {
          this.setLightTheme()
        } else {
          this.setDarkTheme()
        }
      }
    },
    setLightTheme() {
      document.body.style.setProperty('--background-color', '#fcfcfc')
      document.body.style.setProperty('--text-color', '#202020')
    },

    setDarkTheme() {
      document.body.style.setProperty('--background-color', '#111111')
      document.body.style.setProperty('--text-color', '#b4b4b4')
    }
  }
})
