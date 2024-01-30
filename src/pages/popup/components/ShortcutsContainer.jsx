import Shortcut from "./Shortcut";

export default function ShortcutsContainer({ shortcuts, setShortcuts }) {
  return (
    <div className="space-y-2 mt-5 max-h-40 grow overflow-auto">
      {shortcuts.length === 0 ? (
        <p className="mt-5 text-center">😥 You don't have any shortcuts yet</p>
      ) : (
        <>
          {shortcuts.map((shortcut, index) => (
            <Shortcut key={index} index={index} shortcut={shortcut} />
          ))}
        </>
      )}
    </div>
  );
}
