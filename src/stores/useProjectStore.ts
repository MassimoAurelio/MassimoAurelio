import { defineStore } from 'pinia'
import valorantImg from '@/assets/img/valorant.jpg'
import cryptoImg from '@/assets/img/cat.png'



export const useProjectStore = defineStore('project', {
  state: () => ({
    items: [
      {
        label: 'VALORANT',
        link: 'https://ru.101xp.com/',
        imgSrc: valorantImg,
        time: '2021-2022',
        position: 'QA MANUAL '
      },
      {
        label: 'CRYPTO',
        link: 'https://www.raketa.world',
        imgSrc: cryptoImg,
        time: '2022-2022',
        position: 'QA MANUAL '
      }
    ]
  })
})
