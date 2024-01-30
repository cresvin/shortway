export const getShortcuts = async () => {
  const result = await chrome.storage.local.get("shortcuts");
  return result.shortcuts || [];
};
