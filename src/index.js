import App from 'components/application/index.vue'
import Vue from 'vue'
import store from 'data/store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#application',
  store,
  render: h => h(App)
})