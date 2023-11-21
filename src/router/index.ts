import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/mainPage/ResumeElement.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/components/about/AboutMe.vue')
    }
  ]
})

export default router
