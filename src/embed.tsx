import React from "react";
import ReactDOM from "react-dom/client";
import { ChatWidget } from "./components/ChatWidget";
import styles from "./index.css?inline";

function resolveApiBaseUrl() {
  return import.meta.env.VITE_EXPLAINER_API_URL || new URL("/api/explain", import.meta.url).toString();
}

const host = document.createElement("div");
host.style.position = "fixed";
host.style.bottom = "20px";
host.style.right = "20px";
host.style.zIndex = "999999";

document.body.appendChild(host);

const shadowRoot = host.attachShadow({ mode: "open" });

const style = document.createElement("style");
style.textContent = styles;
shadowRoot.appendChild(style);

const container = document.createElement("div");
shadowRoot.appendChild(container);

ReactDOM.createRoot(container).render(
  <ChatWidget
    apiBaseUrl={resolveApiBaseUrl()}
    embedded
  />
);
