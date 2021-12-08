import Vue from 'vue'
import Vuex from 'vuex'
import menus from './models/menus'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
  modules: {
    menus,
  }
})

export default store
