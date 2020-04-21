//使用es6模块加载VUE
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },  //==={App:App}
  template: '<App/>'
})
