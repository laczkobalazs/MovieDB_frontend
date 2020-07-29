import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "./MovieList";

export default function WatchList() {
  const [watchListMovies, setWatchListMovies] = useState([]);

  useEffect(() => {
    const url = "http://localhost:8080/watchlist";
    axios.get(url).then((res) => {
      setWatchListMovies(res.data.results);
    });
  }, []);

  return (
    <div>
      <MovieList movies={watchListMovies} />
    </div>
  );
}
