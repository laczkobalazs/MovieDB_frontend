import React, { useState, useEffect, useContext } from "react";
import { PopularMovieContext } from "../context/PopularMovieContext";
import { LatestMovieContext } from "../context/LatestMovieContext";
import { HomepageContext } from "../context/HomepageContext";
import MovieList from "./MovieList";

export default function HomePage(props) {
  const [popularMovies] = useContext(PopularMovieContext);
  const [latestMovies] = useContext(LatestMovieContext);
  const [movieList, setMovieList] = useContext(HomepageContext);

  let movieType = "latest";

  return (
    <div>
      <button
        onClick={() => {
          console.log(movieList);
          console.log(movieType);

          if (movieType === "latest") {
            movieType = "popular";
            setMovieList(popularMovies);
            console.log(movieList);
          } else if (movieType === "popular") {
            movieType = "latest";
            setMovieList(latestMovies);
            console.log(movieList);
          }
        }}
      >
        Toggle
      </button>

      <MovieList movies={movieList} />
    </div>
  );
}
