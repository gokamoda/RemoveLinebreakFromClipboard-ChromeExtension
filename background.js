chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["remove_linebreaks_in_clipboard.js"],
  });
});
