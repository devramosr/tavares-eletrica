import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "@fontsource-variable/bricolage-grotesque/wght.css";
import "@fontsource-variable/inter/wght.css";
import "./styles.css";
import App from "./App.jsx";

const lang = window.location.pathname.startsWith("/en") ? "en" : "pt";
const root = document.getElementById("root");
const app = (
  <StrictMode>
    <App lang={lang} />
  </StrictMode>
);

if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
  createRoot(root).render(app);
}
