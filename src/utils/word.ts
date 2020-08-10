import { saveData, loadData } from './storage';
import { checkWordValid } from './format';
import * as moment from 'moment';

export async function saveWord(word: IWord, date: Date = new Date()): Promise<any> {
  if (!checkWordValid(word.name)) {
    return;
  }

  if (await checkDuplicate(date, word.name)) {
    warnDuplicate(date, word);
    return;
  }

  const key = moment(date).format('YYYYMMDD');
  let savedList = (await loadData(key)) || [];

  savedList = [word, ...savedList];

  return saveData(key, savedList);
}

function warnDuplicate(date: Date, word: IWord) {
  if (confirm(`"${word.name}"는(은) 이미 등록된 단어입니다. 수정하시겠습니까?`)) {
    updateWord(date, word.name, word);
  }
}

export async function deleteWord(date: Date, wordName: string) {
  const key = moment(date).format('YYYYMMDD');
  const wordList = await loadData(key);
  const idx = getIndex(wordName, wordList);

  wordList.splice(idx, 1);

  await saveData(key, wordList);
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

export async function checkDuplicate(date: Date = new Date(), wordName: string) {
  const key = moment(date).format('YYYYMMDD');
  const savedList = await loadData(key);
  const isDuplicated = (savedList.find((word: IWord) => word.name === wordName)) ? true : false;

  return isDuplicated;
}

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
