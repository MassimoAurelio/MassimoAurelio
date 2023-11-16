import { defineStore } from 'pinia'
import linkedIn from '../assets/img/linkedIn.svg'
import gitHub from '../assets/img/github.svg'
import email from '../assets/img/email.svg'
import youtube from '../assets/img/youtube.svg'

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

export const useMySocialsStoreInAboutMe = defineStore('socials', {
  state: () => ({
    items: [
      { label: 'Email (General)', link: 'massimoaureliowork@gmail.com', imgSrc: email },
      {
        label: 'YouTube',
        link: 'https://github.com/MassimoAurelio',
        imgSrc: youtube
      },
      {
        label: 'GitHub',
        link: 'https://github.com/MassimoAurelio',
        imgSrc: gitHub
      }
    ]
  })
})
