import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/Layout/home'
import notFound from '../components/Error/notFound'
import navMenu from '../components/Element/navMenu'

Vue.use(Router)

/**
 * 解决报错 NavigationDuplicated: Avoided redundant navigation to current location: “/“
 * 参考链接：https://blog.csdn.net/weixin_42402845/article/details/108334329
 */
//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: home
    },
    {
      path: "/element",
      name: "element",
      component: home,
      children: [
        {
          path: "navMenu", // 前面不要加 `/`
          name: "navMenu",
          component: navMenu
        }
      ]
    },
    // {
    //   path: "/404",
    //   name: "notFound",
    //   component: notFound
    // },
    // {
    //   path: "*", // 此处需特别注意置于最底部
    //   redirect: "/404"
    // }
  ]
})

export default router;
