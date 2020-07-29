import React, { useState, useEffect, createContext, useContext } from "react";
import { LatestMovieContext } from "../context/LatestMovieContext";

export const HomepageContext = createContext();

export const HomepageContextProvider = (props) => {
  const [movieList, setMovieList] = useState([]);

  const [latestMovies] = useContext(LatestMovieContext);

  useEffect(() => {
    setMovieList(latestMovies);
  }, [latestMovies]);

  return (
    <HomepageContext.Provider value={[movieList, setMovieList]}>
      {props.children}
    </HomepageContext.Provider>
  );
};
