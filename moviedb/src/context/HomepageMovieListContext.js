import React, { useState, useEffect, createContext, useContext } from "react";
import { HomepageContext } from "../context/HomepageContext";

export const HomepageMovieListContext = createContext();

export const HomepageMovieListContextProvider = (props) => {
  const [movieList, setMovieList] = useState([]);

  const [latestMovies] = useContext(HomepageContext);

  useEffect(() => {
    setMovieList(latestMovies);
  }, [latestMovies]);

  return (
    <HomepageMovieListContext.Provider value={[movieList, setMovieList]}>
      {props.children}
    </HomepageMovieListContext.Provider>
  );
};
