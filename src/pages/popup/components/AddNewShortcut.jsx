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
        ref={prefixRef}
        className="bg-inherit placeholder:text-zinc-400 border px-4 py-2 rounded-md outline-none focus:border-zinc-700 border-zinc-800"
      />
      <input
        type="text"
        placeholder="Content ex. hello"
        className="bg-inherit placeholder:text-zinc-400 border px-4 py-2 rounded-md outline-none focus:border-zinc-700 border-zinc-800"
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
