import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";

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
      component: Home
    },
    {
      path: '/view-one',
      name: 'view-one',
      component: () => import('../views/ViewOne.vue'),
    },
    {
      path: '/view-two',
      name: 'view-two',
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