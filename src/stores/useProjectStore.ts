import { defineStore } from 'pinia'
import valorant from '@/assets/img/valorant.jpg'
import crypto from '@/assets/img/crypto.jpg'

export const useProjectStore = defineStore('project', {
  state: () => ({
    items: [
      {
        label: 'VALORANT',
        link: 'https://github.com/MassimoAurelio/valorant',
        imgSrc: valorant,
        time: '2023'
      },
      {
        label: 'CRYPTO',
        link: 'https://github.com/MassimoAurelio/-vue-practice',
        imgSrc: crypto,
        time: '2023'
      }
    ]
  })
})
