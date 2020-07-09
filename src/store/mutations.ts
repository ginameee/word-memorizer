import { mutationTypes as types } from './store-types';

export default {
  [types.UPDATE_FOO](state: any, payload: any) {
    state.foo = payload;
  },
};
