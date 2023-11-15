import { defineStore } from 'pinia'
import linkedIn from '../assets/img/linkedIn.svg'
import gitHub from '../assets/img/github.svg'

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
