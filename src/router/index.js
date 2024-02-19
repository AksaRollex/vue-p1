import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import DataUser from '@/components/DataUser'
import User from '@/components/User'
import Admin from '@/components/Admin'
import TambahData from '@/components/TambahData'
import EditData from '@/components/EditData'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/datauser',
      name: 'DataUser',
      component: DataUser
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/tambahdata',
      name: 'TambahData',
      component: TambahData
    },
    {
      path: '/editdata',
      name: 'EditData',
      component: EditData
    },
  ]
})