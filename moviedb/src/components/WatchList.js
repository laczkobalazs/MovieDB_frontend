import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import MovieList from "./MovieList";
import { LanguageContext } from "../context/LanguageContext";

export default function WatchList() {
  const [watchListMovies, setWatchListMovies] = useState([]);
  const [language, setLanguage] = useContext(LanguageContext);

  useEffect(() => {
    const url = `http://localhost:8080/watchlist/${language}`;
    axios.get(url).then((res) => {
      setWatchListMovies(res.data.results);
    });
  }, [language]);

  return (
    <div>
      <MovieList movies={watchListMovies} />
    </div>
  );
}
