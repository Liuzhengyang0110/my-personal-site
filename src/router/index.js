import { createRouter, createWebHistory } from 'vue-router'

const Study = () => import('../views/Study.vue')
const Life = () => import('../views/Life.vue')

const routes = [
  { path: '/', redirect: '/study' },
  { path: '/study', name: 'Study', component: Study },
  { path: '/life', name: 'Life', component: Life }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


