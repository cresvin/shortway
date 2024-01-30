import { useEffect, useState } from "react";
import AddNewShortcut from "./components/AddNewShortcut";
import Header from "./components/Header";
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
      <Header />
      <AddNewShortcut shortcuts={shortcuts} setShortcuts={setShortcuts} />
      <ShortcutsContainer shortcuts={shortcuts} setShortcuts={setShortcuts} />
    </div>
  );
}
