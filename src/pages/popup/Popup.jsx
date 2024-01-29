import { useEffect, useState } from "react";
import NewShortcut from "./components/NewShortcut";
import ShortcutsContainer from "./components/ShortcutsContainer";

export default function Popup() {
  const [shortcuts, setShortcuts] = useState([]);

  useEffect(() => {
    const getShortcuts = async () => {
      const result = await chrome.storage.local.get("shortcuts");
      setShortcuts(result.shortcuts || []);
    };
    getShortcuts();
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold mb-5">Shortway</h1>
      <NewShortcut shortcuts={shortcuts} setShortcuts={setShortcuts} />
      <ShortcutsContainer shortcuts={shortcuts} setShortcuts={setShortcuts} />
    </div>
  );
}
