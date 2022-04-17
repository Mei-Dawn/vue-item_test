import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import './assets/less/index.less'
import store from './store'

import http from 'axios'
import  '../src/api/mock.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$http = http 

new Vue({
  router,    //將vuerouter配置在項目中
  store,
  render: h => h(App),
}).$mount('#app')