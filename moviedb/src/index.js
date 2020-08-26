import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import { LanguageContextProvider } from "./context/LanguageContext";
import { RefreshContextProvider } from "./context/RefreshContext";
import { WatchWatchedContextProvider } from "./context/WatchWatchedContext";
import { LoggedInContextProvider } from "./context/LoggedInContext";

ReactDOM.render(
  <React.StrictMode>
    <LoggedInContextProvider>
      <LanguageContextProvider>
        <RefreshContextProvider>
          <WatchWatchedContextProvider>
            <App />
          </WatchWatchedContextProvider>
        </RefreshContextProvider>
      </LanguageContextProvider>
    </LoggedInContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
