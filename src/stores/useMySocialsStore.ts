import { defineStore } from 'pinia'
import linkedIn from '@/assets/img/linkedIn.svg'
import gitHub from '@/assets/img/github.svg'
import email from '@/assets/img/email.svg'
import youtube from '@/assets/img/youtube.svg'
import codewars from '@/assets/img/codewars.svg'
import telegram from '@/assets/img/telegram.svg'

export const useMySocialsStore = defineStore('socials', {
  state: () => ({
    items: [
      { label: 'LinkedIn', link: 'https://www.linkedin.com/in/massimoaurelio/', imgSrc: linkedIn },
      {
        label: 'GitHub',
        link: 'https://github.com/MassimoAurelio',
        imgSrc: gitHub
      },
      {
        label: 'CodeWars',
        link: 'https://www.codewars.com/users/MassimoAurelio',
        imgSrc: codewars
      },
      {
        label: 'Telegram',
        link: 'https://t.me/massimoaurelio',
        imgSrc: telegram
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
