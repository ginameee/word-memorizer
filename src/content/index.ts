document.addEventListener('mouseup', sendWord);

function sendWord() {
    const selected = window.getSelection()?.toString();

    if (selected && selected.length > 0) {
        chrome.runtime.sendMessage({ 'word': selected });
    }
}
