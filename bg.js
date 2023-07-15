// Listen for the message from the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'download') {
        const blob = new Blob([message.text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        chrome.downloads.download({
            url: url,
            filename: message.filename,
            saveAs: true
        });
    }
});
