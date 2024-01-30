import { getShortcuts } from "@/helpers/getShortcuts";

const textareas = Array.from(document.querySelectorAll("textarea"));
const inputs = Array.from(document.querySelectorAll("input[type='text']"));

let shortcuts = [];

(async () => {
  shortcuts = await getShortcuts();
})();

const handleShortcuts = (element) => {
  const value = element.value;

  const shortcut = shortcuts.find((shortcut) =>
    value.includes(shortcut.prefix)
  );

  if (shortcut) {
    const regex = new RegExp(shortcut.prefix, "g");
    const newValue = value.replace(regex, shortcut.content);
    element.value = newValue;
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", () => handleShortcuts(input));
});

textareas.forEach((textarea) => {
  textarea.addEventListener("input", () => handleShortcuts(textarea));
});
