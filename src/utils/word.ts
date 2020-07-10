import { saveData, loadData } from './storage';
import { checkWordValid } from './format';
import * as moment from 'moment';

export async function saveWord(word: IWord, date: Date = new Date()): Promise<any> {
  if (!checkWordValid(word.name)) {
    return;
  }

  const key = moment(new Date()).format('YYYYMMDD');
  const savedList = (await loadData(key)) || [];

  savedList.push(word);

  return saveData(key, savedList);
}

export async function deleteWord(date: Date, index: number) {
  const key = moment(date).format('YYYYMMDD');
  const savedList = await loadData(key);

  savedList.splice(index, 1);

  saveData(key, savedList);
}

export async function updateWord(date: Date, wordName: string, newWord: IWord) {
  const key = moment(date).format('YYYYMMDD');
  const savedList = await loadData(key);
  const idx = getIndex(wordName, savedList);

  if (idx < 0) {
    return;
  }

  savedList[idx] = { ...newWord };
  saveData(key, savedList);
}

export async function checkDuplicate() {}

export async function getMeaning(wordName: string) {
  return `${wordName} is blahblah...`;
}

export function getIndex(name: string, wordList: IWord[]): number {
  const selectedWord = wordList.find(word => word.name === name);

  if (!selectedWord) {
    return -1;
  } else {
    return wordList.indexOf(selectedWord);
  }
}
