function checkForInstagramPhoto(tabId, changeInfo, tab){
  if (tab.url.indexOf('http://instagram.com/p') === 0){
    chrome.pageAction.show(tabId);
  }
};

function handleClick(tab){
  chrome.tabs.executeScript(null, {file: 'content_script.js'});
};

function handleDownloadUrl(request, sender, sendResponse){
  chrome.downloads.download({url: request.imageUrl});
};

chrome.tabs.onUpdated.addListener(checkForInstagramPhoto);

chrome.pageAction.onClicked.addListener(handleClick);

chrome.runtime.onMessage.addListener(handleDownloadUrl);
