import { createRouter, createWebHistory } from 'vue-router'
// 导入组件
import Home from '../views/Home.vue'
import Scanner from '../views/Scanner.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/scanner', name: 'Scanner', component: Scanner }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
