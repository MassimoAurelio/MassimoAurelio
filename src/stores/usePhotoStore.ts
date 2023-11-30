import { defineStore } from 'pinia'
import myphoto from '@/assets/img/photo.png'
import obratka from '@/assets/img/obratka.png'
import cat1 from '@/assets/img/cat.png'
import misa from '@/assets/img/misa.png'
import type { Photo } from '@/types/interfaces'

export const usePhotoStore = defineStore({
  id: 'img',
  state: () => ({
    items: [
      { imgSrc: myphoto, obratka: obratka, isFlipped: false },
      { imgSrc: cat1, obratka: obratka, isFlipped: false },
      { imgSrc: cat1, obratka: obratka, isFlipped: false },
      { imgSrc: misa, obratka: obratka, isFlipped: false }
    ] as Photo[]
  })
})
