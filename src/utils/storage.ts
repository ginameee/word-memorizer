import { APP_NAME } from '@/constants/app';
import * as  moment from 'moment';

export default {
    saveData(key: string, data: any): Promise<any> {
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
    },
    loadData(key: string): Promise<any> {
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
    },
    async saveWord(word: string, date: Date = new Date()): Promise<any> {
        if (!word) { return; }

        const yyyymmdd = moment(new Date()).format('YYYYMMDD');
        const key = `${yyyymmdd}`;
        const savedData = await this.loadData(key);
        const wordList = savedData || [];

        console.log(wordList);

        wordList.push(word);
        console.log(wordList);

        return this.saveData(key, wordList)
            .then(
                () => {
                    console.log('success!');
                }
            );
    }
}