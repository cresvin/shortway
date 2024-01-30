import { useRef } from "react";
import { isShortcutExist } from "../helpers/isShortcutExist";
import { reloadWindow } from "../helpers/reloadWindow";

export default function AddBtn({ shortcuts, setShortcuts }) {
  const prefixRef = useRef(null);
  const contentRef = useRef(null);

  const handleCreateShortcut = async () => {
    const prefix = prefixRef.current.value;
    const content = contentRef.current.value;

    if (prefix.trim() === "" || content.trim() === "") {
      alert("Fields cannot be empty!");
      return;
    }

    if (isShortcutExist(shortcuts, prefix)) {
      alert("Shortcut is already exist!");
      return;
    }

    const newShortcuts = [...shortcuts];
    newShortcuts.push({ prefix, content });
    setShortcuts(newShortcuts);

    await chrome.storage.local.set({ shortcuts: newShortcuts });
    await reloadWindow();
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Prefix ex. !hi"
        className="grow outline-none focus:ring-1 ring-indigo-500 bg-zinc-900 placeholder:text-zinc-500 rounded-md px-4"
        ref={prefixRef}
      />
      <input
        type="text"
        placeholder="Content ex. hello"
        className="grow outline-none focus:ring-1 ring-indigo-500 bg-zinc-900 placeholder:text-zinc-500 rounded-md px-4"
        ref={contentRef}
      />
      <button
        onClick={handleCreateShortcut}
        className="px-4 font-medium py-2 rounded-md bg-white/90 text-black hover:bg-white transition-colors"
      >
        Add
      </button>
    </div>
  );
}
