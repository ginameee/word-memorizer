import {
  stateTypes as sTypes
} from './store-types';

export default {
  setWordList(state: any, wordList: any[]) {
    state[sTypes.WORD_LIST] = wordList;
  }
};
