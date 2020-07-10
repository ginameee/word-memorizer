import {
  mutationTypes as mTypes,
  actionTypes as aTypes
} from './store-types';

import { saveData, loadData } from '@/utils/storage';
import { saveWord as saveWordToChrome } from '@/utils/word';
import * as  moment from 'moment';

export default {
  async saveWord({ dispatch }, word: IWord): Promise<any> {
    await saveWordToChrome(word);
    dispatch(aTypes.LOAD_WORD_LIST);
  },

  async loadWordList({ commit }, date: Date = new Date()): Promise<IWord[]> {
    const yyyymmdd: string = moment(date).format('YYYYMMDD');
    const wordList = await loadData(yyyymmdd) || [];

    commit(mTypes.SET_WORD_LIST, wordList);

    return wordList;
  },
  async clearWordList({ commit }, date: Date = new Date()): Promise<any> {
    const yyyymmdd: string = moment(date).format('YYYYMMDD');

    await saveData(yyyymmdd, []);
    commit(mTypes.SET_WORD_LIST, []);
  },
}
