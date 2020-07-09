import {
  actionTypes as aTypes,
  mutationTypes as mTypes
} from './store-types';

import * as  moment from 'moment';
import { APP_NAME } from '@/constants/app';

const getDatakey = (yyyymmdd: string = moment(new Date()).format('YYYYMMDD')): string => `${APP_NAME}_${yyyymmdd}`

export default {
  [aTypes.SAVE_WORD]({ dispatch }, word: string): void {
    chrome.storage.sync.set(
      { [getDatakey()]: word },
      () => {
        console.log('Value is set to ' + word);
        dispatch(aTypes.LOAD_WORDS);
      }
    );
  },

  [aTypes.LOAD_WORDS]({ commit }, date: Date = new Date()): void {
    const yyyymmdd: string = moment(date).format('YYYYMMDD');

    chrome.storage.sync.get(
      [getDatakey(yyyymmdd)],
      (result) => {
        console.log('Value currently is ' + result.key);
        commit(mTypes.SET_WORDS);
      });
  },
}
