import App from 'components/application/index.vue'
import Vue from 'vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#application',
  components: { App },
  template: '<App />'
})