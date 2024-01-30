chrome.runtime.onInstalled.addListener((obj) => {
  const installedPageUrl = chrome.runtime.getURL(
    "src/pages/installed/index.html"
  );

  if (obj.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.tabs.create({ url: installedPageUrl });
  }
});
