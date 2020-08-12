import React, { useContext, useState, useEffect } from "react";
import MovieList from "./MovieList";
import axios from "axios";
import { LanguageContext } from "../context/LanguageContext";
import { RefreshContext } from "../context/RefreshContext";

export default function WatchedMovies(props) {
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [language, setLanguage] = useContext(LanguageContext);
  const [refresh, setRefresh] = useContext(RefreshContext);

  useEffect(() => {
    const watchedMoviesURL = `http://localhost:8080/all-watched-movies/${language}`;
    axios
      .get(watchedMoviesURL)
      .then((res) => {
        setWatchedMovies(res.data);
      })
      .catch((err) => console.log(err));
  }, [language, refresh]);

  return (
    <div>
      <MovieList movies={watchedMovies} />
    </div>
  );
}
