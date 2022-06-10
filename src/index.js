import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
// Обнуляем стили scc
import "normalize.css";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
