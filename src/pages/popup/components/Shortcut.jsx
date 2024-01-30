export default function Shortcut({ shortcut, index }) {
  const handleDelete = async (index) => {
    const newShortcuts = [...shortcuts];
    newShortcuts.splice(index, 1);
    setShortcuts(newShortcuts);
    await chrome.storage.local.set({ shortcuts: newShortcuts });
  };
  
  return (
    <div className="flex items-center gap-2">
      <p className="border-zinc-900 font-medium border p-2 rounded-md">
        {shortcut.prefix}
      </p>
      <p className="grow">{shortcut.content}</p>
      <button
        onClick={() => handleDelete(index)}
        className="px-2 py-2 hover:bg-red-500 rounded-md transition-colors"
      >
        Delete
      </button>
    </div>
  );
}
