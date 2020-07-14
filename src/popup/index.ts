import Vue from 'vue';
import PopupApp from '@popup/Popup.vue';
import store from '@popup/store';
import router from '@popup/router';
import elementUI from 'element-ui';

import locale from 'element-ui/lib/locale/lang/ko.js';
import '@/assets/scss/init.scss';
import 'element-ui/lib/theme-chalk/index.css';

global.browser = require('webextension-polyfill');
Vue.prototype.$browser = global.browser;

Vue.use(elementUI, { locale });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(PopupApp),
});
