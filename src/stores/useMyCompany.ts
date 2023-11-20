import { defineStore } from 'pinia'
import xp from '@/assets/img/101xp.jpg'
import raketa from '@/assets/img/raketa.png'
import mint from '@/assets/img/mint.jpg'

export const useMyCompany = defineStore('company', {
  state: () => ({
    items: [
      {
        label: '101XP',
        link: 'https://ru.101xp.com/',
        imgSrc: xp,
        time: '2021-2022',
        position: 'QA MANUAL '
      },
      {
        label: 'Raketa',
        link: 'https://www.raketa.world',
        imgSrc: raketa,
        time: '2022-2022',
        position: 'QA MANUAL '
      },
      { label: 'M1NT', link: '', imgSrc: mint, time: '2022-', position: 'QA FULL-STACK ' }
    ]
  })
})
