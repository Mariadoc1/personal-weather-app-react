import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import Weather from "./Weather.js";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Weather />
  </StrictMode>
);
