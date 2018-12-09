import Vue from 'vue'
import Router from 'vue-router'
import Init from '../components/Init.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import ListPage from '../components/ListPage.vue'

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
