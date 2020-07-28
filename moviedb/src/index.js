import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { HomepageContextProvider } from "../src/context/HomepageContext";
import { HomepageMovieListContextProvider } from "../src/context/HomepageMovieListContext";

ReactDOM.render(
  <React.StrictMode>
    <HomepageContextProvider>
      <HomepageMovieListContextProvider>
        <App />
      </HomepageMovieListContextProvider>
    </HomepageContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
