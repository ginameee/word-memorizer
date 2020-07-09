import { saveWord } from '@/utils/storage';

global.browser = require('webextension-polyfill');

chrome.runtime.onMessage.addListener(receiver);

async function receiver(request: any, sender?: any, sendResponse?: any) {
    saveWord(request.word);
}

