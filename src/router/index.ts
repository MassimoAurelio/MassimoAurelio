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
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('@/components/project/ProjectMobile.vue')
    },
    {
      path: '/valorant',
      name: 'Valorant',
      component: () => import('@/components/project/ValorantMobile.vue')
    },
    {
      path: '/links',
      name: 'Links',
      component: () => import('@/components/about/MoreToConnect.vue')
    },
    {
      path: '/stack',
      name: 'Stack',
      component: () => import('@/components/stack/MyStack.vue')
    }
  ]
})

export default router
