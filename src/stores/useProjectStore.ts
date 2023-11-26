import { defineStore } from 'pinia'
import valorant from '@/assets/img/valorant.png'
import crypto from '@/assets/img/crypto.jpg'
import massimo from '@/assets/img/massimo.jpg'

export const useProjectStore = defineStore('project', {
  state: () => ({
    items: [
      {
        label: 'VALORANT',
        link: '/valorant',
        gitHub: 'https://github.com/MassimoAurelio/MassimoAurelio.git',
        imgSrc: valorant,
        time: '2023',
        description:
          'A web application for the competitive game VALORANT, utilizing the API at https://dash.valorant-api.com.'
      },
      {
        label: 'CRYPTO',
        link: 'https://github.com/MassimoAurelio/-vue-practice',
        imgSrc: crypto,
        time: '2023',
        description:
          'crypto project'
      },
      
      {
        label: 'MASSIMO CV',
        link: 'https://github.com/MassimoAurelio/MassimoAurelio',
        imgSrc: massimo,
        time: '2023',
        description:
          'My cv'
      }
    ]
  })
})
