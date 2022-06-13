import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView'
import User from '../views/User/index'
import Home from '../views/home/index'
import MallManage from '@/views/Mall/MallManage'
import pageOne from '@/views/other/pageOne'
import pageTwo from '@/views/other/pageTwo'
import Login from '@/views/Login/login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView,
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home
      },
      {
        path: '/user',
        name: 'user',
        component: User
      },
      {
        path: '/mall',
        name: 'mall',
        component: MallManage
      },
      {
        path: '/page1',
        name: 'page1',
        component: pageOne
      },
      {
        path: '/page2',
        name: 'page2',
        component: pageTwo
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
