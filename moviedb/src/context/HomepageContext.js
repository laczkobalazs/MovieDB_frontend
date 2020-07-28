import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const HomepageContext = createContext();

export const HomepageContextProvider = (props) => {
  const [latestMovies, setLatestMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const latestURL = `http://localhost:8080/latest-movies`;
    const popularURL = `http://localhost:8080/popular-movies`;
    axios
      .get(latestURL)
      .then((res) => setLatestMovies(res.data.results))
      .catch((err) => console.log(err));

    axios
      .get(popularURL)
      .then((res) => setPopularMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <HomepageContext.Provider
      value={[latestMovies, setLatestMovies, popularMovies, setPopularMovies]}
    >
      {props.children}
    </HomepageContext.Provider>
  );
};
