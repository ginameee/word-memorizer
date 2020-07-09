import { APP_NAME } from '@/constants/app';
import * as  moment from 'moment';

export default {
    saveData(data: Object): Promise<any> {
        return new Promise(
            (resolve, reject) => {
                try {
                    chrome.storage.sync.set(
                        data,
                        () => {
                            console.log(data)
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
        return new Promise(
            (resolve, reject) => {
                try {
                    chrome.storage.sync.get(
                        key,
                        (result) => { resolve(result); }
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
        const key = `${APP_NAME}_${yyyymmdd}`;
        const savedData = await this.loadData(key);
        const wordList = savedData[key] || [];

        console.log(wordList);

        wordList.push(word);

        return this.saveData({ [key]: wordList })
            .then(
                () => {
                    console.log('success!');
                }
            );
    }
}