import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const PopularMovieContext = createContext();

export const PopularMovieContextProvider = (props) => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const popularURL = `http://localhost:8080/popular-movies`;
    axios
      .get(popularURL)
      .then((res) => setPopularMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <PopularMovieContext.Provider value={[popularMovies, setPopularMovies]}>
      {props.children}
    </PopularMovieContext.Provider>
  );
};
