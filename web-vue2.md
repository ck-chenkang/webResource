# web-vue2.md

## Node安装、npm换源、npm升级、vuecli全局安装

这部分忽略了

## 初始化项目

初始化项目

```
vue init webpack web-vue2
```

切换目录

```
cd web-vue2
```

启动项目

```
npm start
```

chrome访问localhost:8080 查看项目是否成功

## 安装vue router

新建 components/LeftMenus.vue 

```vue
<template>
  <div>
    <h1>Hello World</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
```

安装vue router

```
npm install vue-router
```

新建 router目录

新建 router/index.js

```js
import Vue from 'vue'
import Router from 'vue-router'

import LeftMenus from '../components/LeftMenus'

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: LeftMenus
    }]
})

export default router;
```

main.js 上挂载router

```
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
```

 app.vue  挂载路由

```vue
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>

</style>
```

## 升级vue2 到vue3

