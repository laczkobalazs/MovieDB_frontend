import React, { useState, useEffect, createContext, useContext } from "react";
import { LikedMovieContext } from "../context/LikedMovieContext";

export const ExperienceContext = createContext();

export const ExperienceContextProvider = (props) => {
  const [movieList, setMovieList] = useState([]);

  const [likedMovies] = useContext(LikedMovieContext);
  useEffect(() => {
    setMovieList(likedMovies);
  }, [likedMovies]);

  return (
    <ExperienceContext.Provider value={[movieList, setMovieList]}>
      {props.children}
    </ExperienceContext.Provider>
  );
};
