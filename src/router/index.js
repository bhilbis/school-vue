import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '@/views/KalkulatorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home'
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'About'
      },
    },
    {
      path: '/kalkulator',
      name: 'kalkulator',
      component: TestView,
      meta: {
        title: 'Kalkulator'
      },
    },
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Error Page'
  next()
})

export default router
