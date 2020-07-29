import React, { useContext } from "react";
import MovieList from "./MovieList";
import { WatchedMovieContext } from "../context/WatchedMovieContext";

export default function WatchedMovies(props) {
  const [watchedMovies, setWatchedMovies] = useContext(WatchedMovieContext);

  console.log(watchedMovies);
  return (
    <div>
      <MovieList movies={watchedMovies} />
    </div>
  );
}
