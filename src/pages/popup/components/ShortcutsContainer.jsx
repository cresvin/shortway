export default function ShortcutsContainer({ shortcuts, setShortcuts }) {
  const handleDelete = async (index) => {
    const newShortcuts = [...shortcuts];
    newShortcuts.splice(index, 1);
    setShortcuts(newShortcuts);
    await chrome.storage.local.set({ shortcuts: newShortcuts });
  };

  if (shortcuts.length === 0) {
    return (
      <p className="mt-5 text-center">😥 You don't have any shortcuts yet</p>
    );
  }

  return (
    <div className="space-y-2 mt-5 max-h-40 grow overflow-auto">
      {shortcuts.map((shortcut, index) => (
        <div key={index} className="flex items-center gap-2">
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
      ))}
    </div>
  );
}
