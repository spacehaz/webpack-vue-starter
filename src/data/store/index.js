import Vue from 'vue'
import Vuex from 'vuex'
import { items, moduleB } from './modules'
import VuexSaga from 'vuex-saga';

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    items,
    moduleB
  }
})
Vue.use(VuexSaga, { store: store })
export default store