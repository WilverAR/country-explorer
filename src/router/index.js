import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/view_one',
      name: 'view_one',
      component: () => import('../views/ViewOne.vue'),
    },
    {
      path: '/view_two',
      name: 'view_two',
      component: () => import('../views/ViewTwo.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router
