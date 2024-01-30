chrome.runtime.onInstalled.addListener((details) => {
  const installedPageUrl = chrome.runtime.getURL(
    "src/pages/installed/index.html"
  );

  if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.tabs.create({ url: installedPageUrl });
  }
});
