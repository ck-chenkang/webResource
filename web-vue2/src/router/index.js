import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/Layout/home'
import Content from '../components/content'

import notFound from '../components/Error/notFound'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    redirect: '/index'
  }, {
    path: '/index',
    name: 'index',
    component: home,
    children: [
      {
        path: 'content',
        name: 'Content',
        component: Content,
      }
    ]
  }, {
    path: "/404",
    name: "notFound",
    component: notFound
  }, {
    path: "*", // 此处需特别注意置于最底部
    redirect: "/404"

  }]
})

export default router;
