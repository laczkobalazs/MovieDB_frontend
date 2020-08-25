import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import MovieList from "./MovieList";
import { LanguageContext } from "../context/LanguageContext";
import { RefreshContext } from "../context/RefreshContext";
import { WatchWatchedContext } from "../context/WatchWatchedContext";
import "../style/WatchListButtons.css";

export default function WatchList() {
  const [watchListMovies, setWatchListMovies] = useState([]);
  const [language, setLanguage] = useContext(LanguageContext);
  const [refresh, setRefresh] = useContext(RefreshContext);
  const [watchWatched, setWatchWatched] = useContext(WatchWatchedContext);
  const [movieType, setMovieType] = useState(watchWatched);
  const cookieValue = document.cookie.split("=")[1];

  useEffect(() => {
    if (movieType === "watch") {
      const url = `http://localhost:8080/watchlist/${language}`;
      axios
        .get(url, {
          withCredentials: true,
          headers: { Authorization: cookieValue },
        })
        .then((res) => {
          setWatchListMovies(res.data.results);
        });
    } else {
      const watchedMoviesURL = `http://localhost:8080/all-watched-movies/${language}`;
      axios
        .get(watchedMoviesURL, {
          withCredentials: true,
          headers: { Authorization: cookieValue },
        })
        .then((res) => {
          setWatchListMovies(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [language, refresh, movieType, cookieValue]);

  return (
    <div>
      <div className="buttonsArea">
        <button
          className="watch"
          disabled={movieType === "watch"}
          onClick={() => {
            setMovieType("watch");
            setWatchWatched("watch");
          }}
        >
          Want To See It
        </button>
        <button
          className="watched"
          disabled={movieType === "watched"}
          onClick={() => {
            setMovieType("watched");
            setWatchWatched("watched");
          }}
        >
          Already Seen It
        </button>
      </div>
      <MovieList movies={watchListMovies} />
    </div>
  );
}
