import { APP_NAME } from '@/constants/app';

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