import React, { useState, useContext } from "react";
import { PopularMovieContext } from "../context/PopularMovieContext";
import { LatestMovieContext } from "../context/LatestMovieContext";
import { HomepageContext } from "../context/HomepageContext";
import MovieList from "./MovieList";

export default function HomePage(props) {
  const [popularMovies] = useContext(PopularMovieContext);
  const [latestMovies] = useContext(LatestMovieContext);
  const [movieList, setMovieList] = useContext(HomepageContext);
  const [movieType, setMovieType] = useState("latest");

  return (
    <div>
      <button
        onClick={() => {
          if (movieType === "latest") {
            setMovieType("popular");
            setMovieList(popularMovies);
          } else {
            setMovieType("latest");
            setMovieList(latestMovies);
          }
        }}
      >
        Toggle
      </button>

      <MovieList movies={movieList} />
    </div>
  );
}
