import { APP_NAME } from '@/constants/app';
import { checkWordValid } from './format';
import * as  moment from 'moment';

export function saveData(key: string, data: any): Promise<any> {
    key = `${APP_NAME}_${key}`;

    return new Promise(
        (resolve, reject) => {
            try {
                chrome.storage.sync.set(
                    { [key]: data },
                    () => {
                        resolve();
                    }
                );
            }
            catch (e) {
                reject(e);
            }
        }
    );
};

export function loadData(key: string): Promise<any> {
    key = `${APP_NAME}_${key}`;

    return new Promise(
        (resolve, reject) => {
            try {
                chrome.storage.sync.get(
                    key,
                    (result) => {
                        resolve(result[key]);
                    }
                );
            }
            catch (e) {
                reject(e);
            }
        }
    );
}

export async function saveWord(word: string, date: Date = new Date()): Promise<any> {
    if (!word || !checkWordValid(word)) { return; }

    const yyyymmdd = moment(new Date()).format('YYYYMMDD');
    const key = `${yyyymmdd}`;
    const savedData = await loadData(key);
    const wordList = savedData || [];

    console.log(wordList);

    wordList.push(word);
    console.log(wordList);

    return saveData(key, wordList);
};