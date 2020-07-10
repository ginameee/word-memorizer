import { stateTypes as sTypes } from './store-types';

export default {
  setWordList(state: any, wordList: any[]) {
    state[sTypes.WORD_LIST] = wordList;
  },
  setDate(state: any, date: Date) {
    state[sTypes.DATE] = date;
  },
};
