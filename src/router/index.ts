import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from './'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./../components/ResumeElement.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('./../components/AboutMe.vue')
    }
  ]
})

export default router
