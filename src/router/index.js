import Vue from 'vue'
import Router from 'vue-router'
import Init from '@/components/Init'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import ListPage from '@/components/ListPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/home',
      name: 'Init',
      component: Init,
      redirect: {
        name: 'ListPage'
      },
      children: [
        {
          name: 'ListPage',
          path: 'ListPage',
          component: ListPage
        },
      ]
    }
  ]
})
