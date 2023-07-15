// download
function saveTextToFile(text, filename) {
	const blob = new Blob([text], { type: 'text/plain' });
	const url = URL.createObjectURL(blob);
	chrome.downloads.download({
		url: url,
		filename: filename,
		saveAs: true
	});
}


// button code
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', async () => {
	const dialogBox = document.getElementById('dialog-box');
	chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
		const tab = tabs[0];
		chrome.tabs.executeScript(tab.id, { file: './injection.js' });
	});
});



document.addEventListener('DOMContentLoaded', () => {
	const dialogBox = document.getElementById('dialog-box');
	dialogBox.innerHTML = "Yip yip";
});
