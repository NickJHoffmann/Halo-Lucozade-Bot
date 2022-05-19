chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ started: false });
});