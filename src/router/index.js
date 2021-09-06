import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
// import storage from '../utils/storage'
// import utils from '../utils/utils'
// import API from '../api'

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
      },
      {
        name: 'user',
        path: '/system/user',
        meta: {
          title: '用户管理'
        },
        component: () => import('@/views/User.vue')
      },
      {
        name: 'menu',
        path: '/system/menu',
        meta: {
          title: '菜单管理'
        },
        component: () => import('@/views/Menu.vue')
      },
      {
        name: 'role',
        path: '/system/role',
        meta: {
          title: '角色管理'
        },
        component: () => import('@/views/Role.vue')
      },
      {
        name: 'dept',
        path: '/system/dept',
        meta: {
          title: '部门管理'
        },
        component: () => import('@/views/Dept.vue')
      },
      {
        name: 'approve',
        path: '/system/approve',
        meta: {
          title: '待我审批'
        },
        component: () => import('@/views/Approve.vue')
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
  },
  {
    name: '404',
    path: '/404',
    meta: {
      title: '页面不存在'
    },
    component: () => import('@/views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// 加载动态路由
// async function loadAsyncRoutes() {
//   let userInfo = storage.getItem('userInfo') || {}
//   if (userInfo.token) {
//     const data = await API.getPermissionList()
//     const menuList = data.menuList
//     let routes = utils.generateRoute(menuList)
//     routes.map((route) => {
//       let url = `./../views/${route.component}.vue`
//       console.log(url)
//       route.component = () => import(url)
//       router.addRoute('home', route)
//     })
//   }
// }
// loadAsyncRoutes()
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
