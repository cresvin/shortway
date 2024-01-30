export const isShortcutExist = (shortcuts, prefix) =>
  shortcuts.some((shortcut) => shortcut.prefix === prefix);
