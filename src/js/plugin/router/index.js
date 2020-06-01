import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,

    children: [
      { path: '/math',  name: 'mathematics', component: () => import('@/views/templates/math') },
      { path: '/writes',  name: 'writes', component: () => import('@/views/templates/writes') }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  { path: '/print',  name: 'mathematics-print', component: () => import('@/views/math-print') },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
