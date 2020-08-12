import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import MovieList from "./MovieList";
import { LanguageContext } from "../context/LanguageContext";
import { RefreshContext } from "../context/RefreshContext";

export default function WatchList() {
  const [watchListMovies, setWatchListMovies] = useState([]);
  const [language, setLanguage] = useContext(LanguageContext);
  const [refresh, setRefresh] = useContext(RefreshContext);

  useEffect(() => {
    const url = `http://localhost:8080/watchlist/${language}`;
    axios.get(url).then((res) => {
      setWatchListMovies(res.data.results);
    });
  }, [language, refresh]);

  return (
    <div>
      <MovieList movies={watchListMovies} />
    </div>
  );
}
