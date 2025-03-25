import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import menus from "./menu";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App menus={menus} />
  </StrictMode>
);
