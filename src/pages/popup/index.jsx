import { createRoot } from "react-dom/client";
import Popup from "./Popup";
import "./index.css";

// fonts imports
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";

function init() {
  const rootContainer = document.querySelector("#root");
  if (!rootContainer) throw new Error("Can't find Popup root element");
  const root = createRoot(rootContainer);
  root.render(<Popup />);
}

init();
