import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/Layout/home'
import Content from '../components/content'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    redirect: '/index'
  }, {
    path: '/index',
    name: 'index',
    component: home,
    children:[
      {
        path: 'content',
        name: 'Content',
        component: Content,
      }
    ]
  }]
})

export default router;
