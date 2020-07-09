import {
  mutationTypes as mTypes,
  actionTypes as aTypes
} from './store-types';

import { saveData, loadData, saveWord as saveWordToStorage } from '@/utils/storage';
import * as  moment from 'moment';

export default {
  async saveWord({ dispatch }, word: string): Promise<any> {
    await saveWordToStorage(word);
    dispatch(aTypes.LOAD_WORD_LIST);
  },

  async loadWordList({ commit }, date: Date = new Date()): Promise<any> {
    const yyyymmdd: string = moment(date).format('YYYYMMDD');
    const wordList = await loadData(yyyymmdd);

    commit(mTypes.SET_WORD_LIST, wordList);

    return wordList;
  },
  async clearWordList({ commit }, date: Date = new Date()): Promise<any> {
    console.log(date);

    const yyyymmdd: string = moment(date).format('YYYYMMDD');

    await saveData(yyyymmdd, []);
    commit(mTypes.SET_WORD_LIST, []);
  },
}
