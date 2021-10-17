import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  // {
  //   path: '/hololives',
  //   name: 'Hololives',
  //   component: () => import('../views/Hololives.vue')
  // },
  // {
  //   path: '/japsongs',
  //   name: 'JapSongs',
  //   component:()=>import('../views/JapSongs.vue')
  // },
  // {
  //   path: '/japanimes',
  //   name: 'JapAnimes',
  //   component:()=>import('../views/JapAnimes.vue')
  // },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/hololives',
    name: 'Hololives',
    component: () => import('../views/Hololives.vue')
  },
  {
    path: '/japsongs',
    name: 'JapSongs',
    component:()=>import('../views/JapSongs.vue')
  },
  {
    path: '/japanimes',
    name: 'JapAnimes',
    component:()=>import('../views/JapAnimes.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
