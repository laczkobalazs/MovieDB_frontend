import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import { LanguageContextProvider } from "./context/LanguageContext";
import { RefreshContextProvider } from "./context/RefreshContext";

ReactDOM.render(
  <React.StrictMode>
    <LanguageContextProvider>
      <RefreshContextProvider>
        <App />
      </RefreshContextProvider>
    </LanguageContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
