import { saveWord, getMeaning } from '@/utils/word';

global.browser = require('webextension-polyfill');

chrome.runtime.onMessage.addListener(receiver);

async function receiver(request: any, sender?: any, sendResponse?: any) {
    const word: IWord = {
        name: request.word,
        meaning: await getMeaning(request.word)
    };

    saveWord(word);
}

