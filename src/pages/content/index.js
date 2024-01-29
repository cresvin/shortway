const textareas = Array.from(document.querySelectorAll("textarea"));

let shortcuts = [];

async function getShortcuts() {
  const result = await chrome.storage.local.get("shortcuts");
  shortcuts = result.shortcuts || [];
  console.log(result);
}

getShortcuts();

textareas.forEach((textarea) => {
  textarea.addEventListener("input", () => {
    const value = textarea.value;

    const shortcut = shortcuts.find((shortcut) =>
      value.includes(shortcut.prefix)
    );

    if (shortcut) {
      const regex = new RegExp(shortcut.prefix, "g");
      const cleaned = value.replace(regex, `${shortcut.content} `);
      textarea.value = cleaned;
    }
  });
});
