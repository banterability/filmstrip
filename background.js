function checkForInstagramPhoto(tabId, changeInfo, tab){
  if (tab.url.indexOf('http://instagram.com/p') === 0){
    chrome.pageAction.show(tabId);
  }
};

chrome.tabs.onUpdated.addListener(checkForInstagramPhoto);
