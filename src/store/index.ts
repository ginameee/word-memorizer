import Vue from 'vue';
import Vuex from 'vuex';

import * as getters from './getters';
import mutations from './mutations';
import * as actions from './actions';

import { menuList } from '@/constants/app';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuList
  },
  getters,
  mutations,
  actions,
});
