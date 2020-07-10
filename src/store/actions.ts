import { mutationTypes as mTypes, actionTypes as aTypes, stateTypes as sTypes } from './store-types';

import { saveData, loadData } from '@/utils/storage';
import { saveWord as saveWordToChrome, deleteWord, updateWord, getIndex } from '@/utils/word';
import * as moment from 'moment';

interface IWordParam {
  targetWord: string;
  word?: IWord;
  date: Date;
}

export default {
  async saveWord({ dispatch }, word: IWord): Promise<any> {
    await saveWordToChrome(word);
    dispatch(aTypes.LOAD_WORD_LIST);
  },

  async loadWordList({ commit }, date: Date = new Date()): Promise<IWord[]> {
    const yyyymmdd: string = moment(date).format('YYYYMMDD');
    const wordList = (await loadData(yyyymmdd)) || [];

    commit(mTypes.SET_WORD_LIST, wordList);

    return wordList;
  },

  async clearWordList({ commit }, date: Date = new Date()): Promise<any> {
    const yyyymmdd: string = moment(date).format('YYYYMMDD');

    await saveData(yyyymmdd, []);
    commit(mTypes.SET_WORD_LIST, []);
  },

  async deleteWord({ state, dispatch }, payload: IWordParam): Promise<any> {
    const wordList = state[sTypes.WORD_LIST];

    const wordName = payload.targetWord;
    const date = payload.date;
    const idx = getIndex(wordName, wordList);

    await deleteWord(date, idx);
    dispatch(aTypes.LOAD_WORD_LIST);
  },

  async updateWord({ state, dispatch }, payload: IWordParam): Promise<any> {},
};
