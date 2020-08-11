import React, { useContext, useState, useEffect } from "react";
import MovieList from "./MovieList";
import axios from "axios";
import { LanguageContext } from "../context/LanguageContext";

export default function WatchedMovies(props) {
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [language, setLanguage] = useContext(LanguageContext);

  useEffect(() => {
    const watchedMoviesURL = `http://localhost:8080/all-watched-movies/${language}`;
    axios
      .get(watchedMoviesURL)
      .then((res) => {
        setWatchedMovies(res.data);
      })
      .catch((err) => console.log(err));
  }, [language]);

  return (
    <div>
      <MovieList movies={watchedMovies} />
    </div>
  );
}
