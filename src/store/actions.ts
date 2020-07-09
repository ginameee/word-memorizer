import {
  mutationTypes as mTypes,
  actionTypes as aTypes
} from './store-types';

import uStorage from '@/utils/storage';
import * as  moment from 'moment';

export default {
  async saveWord({ dispatch }, word: string): Promise<any> {
    await uStorage.saveWord(word);
    dispatch(aTypes.LOAD_WORD_LIST);
  },

  async loadWordList({ commit }, date: Date = new Date()): Promise<any> {
    const yyyymmdd: string = moment(date).format('YYYYMMDD');
    const wordList = await uStorage.loadData(yyyymmdd);

    commit(mTypes.SET_WORD_LIST, wordList);

    return wordList;
  },
}
