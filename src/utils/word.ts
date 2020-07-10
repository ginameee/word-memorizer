import { saveData, loadData } from './storage';
import { checkWordValid } from './format';
import * as  moment from 'moment';

export async function saveWord(word: IWord, date: Date = new Date()): Promise<any> {
    if (!checkWordValid(word.name)) { return; }

    const yyyymmdd = moment(new Date()).format('YYYYMMDD');
    const key = `${yyyymmdd}`;
    const savedData = await loadData(key);
    const wordList = savedData || [];

    wordList.push(word);
    console.log(wordList);

    return saveData(key, wordList);
};

export async function getMeaning(word: string) {
    return `${word} is blahblah...`
}