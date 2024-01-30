export const createNewTab = async (url) => await chrome.tabs.create({ url });
