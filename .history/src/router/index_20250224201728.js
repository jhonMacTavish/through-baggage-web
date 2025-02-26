/*
 * @Author: jhon.mactavish96 jhon.mactavish96@gmail.com
 * @Date: 2025-02-24 19:48:52
 * @LastEditors: jhon.mactavish96 jhon.mactavish96@gmail.com
 * @LastEditTime: 2025-02-24 20:17:25
 * @FilePath: \sheepnavigationt:\Projects\VS Code\vue-bootstrap-master\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
