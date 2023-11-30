import { defineStore } from 'pinia'
import valorant from '@/assets/img/valorant.png'
import massimo from '@/assets/img/massimo.jpg'

export const useProjectStore = defineStore('project', {
  state: () => ({
    items: [
      {
        label: 'VALORANT',
        link: '/valorant',

        gitHub: 'https://github.com/MassimoAurelio/valorant',
        imgSrc: valorant,
        time: '2023',
        description:
          'A web application for the competitive game VALORANT, utilizing the API at https://dash.valorant-api.com.'
      },
      {
        label: 'MASSIMO CV',
        link: 'https://github.com/MassimoAurelio/MassimoAurelio',
        imgSrc: massimo,
        time: '2023',
        description: 'My blog'
      }
    ]
  })
})
