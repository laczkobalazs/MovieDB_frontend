import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import { LanguageContext } from "../context/LanguageContext";

export const LatestMovieContext = createContext();

export const LatestMovieContextProvider = (props) => {
  const [latestMovies, setLatestMovies] = useState([]);
  const [language, setLanguage] = useContext(LanguageContext);

  useEffect(() => {
    const latestURL = `http://localhost:8080/latest-movies/${language}`;
    axios
      .get(latestURL)
      .then((res) => {
        setLatestMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [language]);

  return (
    <LatestMovieContext.Provider value={[latestMovies, setLatestMovies]}>
      {props.children}
    </LatestMovieContext.Provider>
  );
};
