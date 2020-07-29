import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const LatestMovieContext = createContext();

export const LatestMovieContextProvider = (props) => {
  const [latestMovies, setLatestMovies] = useState([]);

  useEffect(() => {
    const latestURL = `http://localhost:8080/latest-movies`;
    axios
      .get(latestURL)
      .then((res) => {
        setLatestMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <LatestMovieContext.Provider value={[latestMovies, setLatestMovies]}>
      {props.children}
    </LatestMovieContext.Provider>
  );
};
