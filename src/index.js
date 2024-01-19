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
    <footer>
      This project was coded by{" "}
      <a href="https://github.com/Mariadoc1" target="_blank" rel="noreferrer">
        Maria Docherty
      </a>{" "}
      and{" "}
      <a
        href="https://github.com/Mariadoc1/personal-weather-app-react"
        target="_blank"
        rel="noreferrer"
      >
        open-sourced on GitHub.
      </a>
    </footer>
  </StrictMode>
);
