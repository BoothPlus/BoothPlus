const COMPLETE = 'complete';

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === COMPLETE) {
    console.log(tabId);
    chrome.scripting.executeScript({
      target: {tabId: tabId},
      files: ['dist/bundle.js']
    });
  }
});

