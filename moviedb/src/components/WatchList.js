import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import MovieList from "./MovieList";
import { LanguageContext } from "../context/LanguageContext";
import { RefreshContext } from "../context/RefreshContext";
import { WatchWatchedContext } from "../context/WatchWatchedContext";

export default function WatchList() {
  const [watchListMovies, setWatchListMovies] = useState([]);
  const [language, setLanguage] = useContext(LanguageContext);
  const [refresh, setRefresh] = useContext(RefreshContext);
  const [watchWatched, setWatchWatched] = useContext(WatchWatchedContext);
  const [movieType, setMovieType] = useState(watchWatched);

  useEffect(() => {
    if (movieType === "watch") {
      const url = `http://localhost:8080/watchlist/${language}`;
      axios.get(url).then((res) => {
        setWatchListMovies(res.data.results);
      });
    } else {
      const watchedMoviesURL = `http://localhost:8080/all-watched-movies/${language}`;
      axios
        .get(watchedMoviesURL)
        .then((res) => {
          setWatchListMovies(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [language, refresh, movieType]);

  return (
    <div>
      <button
        style={{ borderRadius: "0.3rem", backgroundColor: "green" }}
        disabled={movieType === "watch"}
        onClick={() => {
          setMovieType("watch");
          setWatchWatched("watch");
        }}
      >
        Want to see it
      </button>

      <button
        style={{ borderRadius: "0.3rem", backgroundColor: "red" }}
        disabled={movieType === "watched"}
        onClick={() => {
          setMovieType("watched");
          setWatchWatched("watched");
        }}
      >
        Seen it
      </button>
      <MovieList movies={watchListMovies} />
    </div>
  );
}
