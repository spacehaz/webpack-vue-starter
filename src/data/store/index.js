import Vue from 'vue'
import Vuex from 'vuex'
import { items, moduleB } from './modules'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    items,
    moduleB
  }
})

export default store