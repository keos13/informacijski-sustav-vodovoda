import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/prijava',
    name: 'login',
    component: () => import("@/views/auth/Login")
  },
    // 404 redirect
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: () => import("@/views/NotFound")
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
