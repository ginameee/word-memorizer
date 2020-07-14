import Vue from 'vue';
import OptionApp from './Option.vue';

global.browser = require('webextension-polyfill');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(OptionApp),
});
