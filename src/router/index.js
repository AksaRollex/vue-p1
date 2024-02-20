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

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: { requiresAuth: true }
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
      component: DataUser,
      meta: { requiresAuth: true }
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: { requiresAuth: true }
    },
    {
      path: '/tambahdata',
      name: 'TambahData',
      component: TambahData,
      meta: { requiresAuth: true }
    },
    {
      path: '/editdata',
      name: 'EditData',
      component: EditData,
      meta: { requiresAuth: true }
    },
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!localStorage.getItem('jwt')){
      next({
        path: '/login',
        query: { redirect: to.fullPath}
      });
    }else{
      next()
    }
  }else{
    next()
  }
})

export default router