import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home/index.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    component: Home
  }, {
    path: '/home',
    name: 'home',
    redirect: '/'
  }],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})
