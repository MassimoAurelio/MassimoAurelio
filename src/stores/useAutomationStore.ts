import { defineStore } from 'pinia'
export const useAutomationStore = defineStore('auto', {
  state: () => ({
    items: [
      { name: 'Maven' },
      { name: 'Graddle'},
      { name: 'Java'},
      { name: 'Selenium' },
      { name: 'Selenide'},
      { name: 'Rest-assured'}
    ]
  })
})
