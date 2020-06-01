import Vue from 'vue'
import App from './App.vue'

import router from './js/plugin/router'
import store from './js/plugin/store'
import echarts from './js/plugin/echarts'

Vue.config.productionTip = false

Vue.use(echarts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
