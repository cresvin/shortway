export default function Shortcut({ shortcut, shortcuts, setShortcuts, index }) {
  const handleDelete = async (index) => {
    const newShortcuts = [...shortcuts];
    newShortcuts.splice(index, 1);
    setShortcuts(newShortcuts);
    await chrome.storage.local.set({ shortcuts: newShortcuts });
  };

  return (
    <div className="flex items-center gap-2">
      <p className="bg-zinc-900 border border-zinc-800 font-medium p-2 rounded-md">
        {shortcut.prefix}
      </p>
      <p className="grow">{shortcut.content}</p>
      <button
        onClick={() => handleDelete(index)}
        className="text-red-400 hover:underline underline-offset-4 transition-colors"
      >
        Delete
      </button>
    </div>
  );
}
