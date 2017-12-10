// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Icon from 'vue-icon'

import VTabBar from 'v-tab-bar'
// You need a specific loader for CSS files like
// https://github.com/webpack/css-loader
import 'v-tab-bar/dist/v-tab-bar.css'

// import Icon from 'vue-awesome/icons'

import 'font-awesome/css/font-awesome.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vant from 'vant'
import 'vant/lib/vant-css/index.css'

import api from './mock/axios'
// import axios from 'axios'

require('./mock/mockapi.js')

Vue.use(Vant)
Vue.use(VTabBar)
Vue.config.productionTip = false

Vue.prototype.$http = api
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
