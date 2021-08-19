const COMPLETE = 'complete';

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === COMPLETE) {
    chrome.scripting.executeScript({
      target: {tabId: tabId},
      files: ['dist/bundle.js']
    });
  }
});

