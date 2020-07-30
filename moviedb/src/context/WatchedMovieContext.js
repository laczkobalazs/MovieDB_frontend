import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const WatchedMovieContext = createContext();

export const WatchedMovieContextProvider = (props) => {
  const [watchedMovies, setWatchedMovies] = useState([]);

  useEffect(() => {
    const watchedMoviesURL = `http://localhost:8080/all-watched-movies`;
    axios
      .get(watchedMoviesURL)
      .then((res) => {
        setWatchedMovies(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <WatchedMovieContext.Provider value={[watchedMovies, setWatchedMovies]}>
      {props.children}
    </WatchedMovieContext.Provider>
  );
};
