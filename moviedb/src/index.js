import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import { PopularMovieContextProvider } from "../src/context/PopularMovieContext";
import { LatestMovieContextProvider } from "../src/context/LatestMovieContext";
import { HomepageContextProvider } from "../src/context/HomepageContext";
import { WatchedMovieContextProvider } from "../src/context/WatchedMovieContext";
import { LikedMovieContextProvider } from "../src/context/LikedMovieContext";
import { DislikedMovieContextProvider } from "../src/context/DislikedMovieContext";
import { ExperienceContextProvider } from "../src/context/ExperienceContext";
import { LanguageContextProvider } from "./context/LanguageContext";

ReactDOM.render(
  <React.StrictMode>
    <LanguageContextProvider>
      <DislikedMovieContextProvider>
        <LikedMovieContextProvider>
          <ExperienceContextProvider>
            <WatchedMovieContextProvider>
              <PopularMovieContextProvider>
                <LatestMovieContextProvider>
                  <HomepageContextProvider>
                    <App />
                  </HomepageContextProvider>
                </LatestMovieContextProvider>
              </PopularMovieContextProvider>
            </WatchedMovieContextProvider>
          </ExperienceContextProvider>
        </LikedMovieContextProvider>
      </DislikedMovieContextProvider>
    </LanguageContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
