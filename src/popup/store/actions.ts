import { mutationTypes as mTypes, actionTypes as aTypes } from './store-types';

import { saveData, loadData } from '@/utils/storage';
import * as uWord from '@/utils/word';
import * as moment from 'moment';

interface IWordParam {
  targetWord: string;
  date: Date;
}

interface IUpdateWordParam extends IWordParam {
  newWord: IWord;
}

export default {
  async saveWord({ dispatch }, word: IWord): Promise<any> {
    await uWord.saveWord(word);
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

  async deleteWord({ dispatch }, payload: IWordParam): Promise<any> {
    const wordName = payload.targetWord;
    const date = payload.date;

    await uWord.deleteWord(date, wordName);
    dispatch(aTypes.LOAD_WORD_LIST, date);
  },

  async updateWord({ dispatch }, payload: IUpdateWordParam): Promise<any> {
    const targetWordName = payload.targetWord;
    const date = payload.date;
    const newWord = payload.newWord;

    await uWord.updateWord(date, targetWordName, newWord);
    dispatch(aTypes.LOAD_WORD_LIST, date);
  },
};
