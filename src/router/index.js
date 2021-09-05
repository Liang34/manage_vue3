import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import storage from '../utils/storage'
import utils from '../utils/utils'
import API from '../api'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: Home,
    redirect: '/welcome',
    children: [
      {
        name: 'welcome',
        path: '/welcome',
        meta: {
          title: 'vue3后台管理系统'
        },
        component: () => import('@/views/Welcome.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
async function loadAsyncRoutes() {
  let userInfo = storage.getItem('userInfo') || {}
  if (userInfo.token) {
    try {
      const { menuList } = await API.getPermissionList()
      let routes = utils.generateRoute(menuList)
      routes.map((route) => {
        let url = `./../views/${route.component}.vue`
        route.component = () => import(url)
        router.addRoute('home', route)
      })
      // eslint-disable-next-line no-empty
    } catch (error) {}
  }
}
loadAsyncRoutes()
// 导航守卫
router.beforeEach((to, from, next) => {
  if (router.hasRoute(to.name)) {
    document.title = to.meta.title
    next()
  } else {
    next('/404')
  }
})

export default router
