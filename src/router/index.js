import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Store from '../views/Store.vue'
import Orden from '../views/Orden.vue'
import Admin from '../views/Admin.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Store',
    name: 'Store',
    component: Store
  },
  {
    path: '/Orden',
    name: 'Orden',
    component: Orden
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
