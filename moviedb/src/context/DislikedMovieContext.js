import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const DislikedMovieContext = createContext();

export const DislikedMovieContextProvider = (props) => {
  const [dislikedMovies, setDislikedMovies] = useState([]);

  useEffect(() => {
    const dislikedURL = `http://localhost:8080/all-disliked-movies`;
    axios
      .get(dislikedURL)
      .then((res) => {
        setDislikedMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <DislikedMovieContext.Provider value={[dislikedMovies, setDislikedMovies]}>
      {props.children}
    </DislikedMovieContext.Provider>
  );
};
