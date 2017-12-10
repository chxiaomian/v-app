import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Tasks from '@/pages/tasks'
import List from '@/pages/list'
import Form from '@/pages/form'
import Config from '@/pages/config'
import Home from '@/pages/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/pages/tasks',
      name: 'Tasks',
      component: Tasks
    },
    {
      path: '/pages/list',
      name: 'List',
      component: List
    },
    {
      path: '/pages/account',
      name: 'Form',
      component: Form
    },
    {
      path: '/pages/config',
      name: 'Config',
      component: Config
    }
  ]
})
