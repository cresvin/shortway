export default function Shortcut({ shortcut, shortcuts, setShortcuts, index }) {
  const handleDelete = async (index) => {
    const newShortcuts = [...shortcuts];
    newShortcuts.splice(index, 1);
    setShortcuts(newShortcuts);
    await chrome.storage.local.set({ shortcuts: newShortcuts });
  };

  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <p className="bg-zinc-900 max-w-32 overflow-hidden border border-zinc-800 font-medium p-2 rounded-md">
          {shortcut.prefix}
        </p>
        <p className="max-w-40 overflow-hidden">{shortcut.content}</p>
      </div>
      <button
        onClick={() => handleDelete(index)}
        className="text-red-400 hover:underline underline-offset-4 transition-colors"
      >
        Delete
      </button>
    </div>
  );
}
