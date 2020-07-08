import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import elementUI from 'element-ui';

import '@/assets/scss/init.scss';
import 'element-ui/lib/theme-chalk/index.css';

global.browser = require('webextension-polyfill');
Vue.prototype.$browser = global.browser;

Vue.use(elementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
