import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/home'
import category from '../views/category'
import login from '../views/login'
import my from '../views/my'
import register from '../views/register'
import search from '../views/search'
import bookshelf from '../views/bookshelf'
import collection from '../views/bookshelf/collection'
import history from '../views/bookshelf/history'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/category',
      component: category
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/my',
      component: my
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/bookshelf',
      component: bookshelf,
      children: [
        {
          path: 'collection',
          component: collection
        },
        {
          path: 'history',
          component: history
        }
      ]
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
export default router
