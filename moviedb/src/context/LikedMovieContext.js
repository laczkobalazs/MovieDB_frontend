import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const LikedMovieContext = createContext();

export const LikedMovieContextProvider = (props) => {
  const [likedMovies, setLikedMovies] = useState([]);

  useEffect(() => {
    const likedURL = `http://localhost:8080/all-liked-movies`;
    axios
      .get(likedURL)
      .then((res) => {
        setLikedMovies(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <LikedMovieContext.Provider value={[likedMovies, setLikedMovies]}>
      {props.children}
    </LikedMovieContext.Provider>
  );
};
