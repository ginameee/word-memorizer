document.addEventListener('mouseup', sendWord);

function sendWord() {
    const selectedText = window.getSelection()?.toString();

    if (selectedText && selectedText.length > 0) {
        chrome.runtime.sendMessage({ word: selectedText });
    }
}
