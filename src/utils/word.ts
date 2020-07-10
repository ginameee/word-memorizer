import { saveData, loadData } from './storage';
import { checkWordValid } from './format';
import * as  moment from 'moment';

export async function saveWord(word: IWord, date: Date = new Date()): Promise<any> {
    if (!checkWordValid(word.name)) { return; }

    const key = `${moment(new Date()).format('YYYYMMDD')}`;
    const savedList = await loadData(key) || [];

    savedList.push(word);

    console.log(savedList);

    return saveData(key, savedList);
};

export async function deleteWord() {

}

export async function checkDuplicate() {

}


export async function getMeaning(word: string) {
    return `${word} is blahblah...`
}