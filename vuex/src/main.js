import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
