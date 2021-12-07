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
