import React, { useState, useEffect, useContext } from "react";
import { HomepageContext } from "../context/HomepageContext";
import { HomepageMovieListContext } from "../context/HomepageMovieListContext";
import MovieList from "./MovieList";

export default function HomePage(props) {
  const [movieList, setMovieList] = useContext(HomepageMovieListContext);
  const [popularMovies] = useContext(HomepageContext);
  const [latestMovies] = useContext(HomepageContext);

  let movieType = "latest";

  return (
    <div>
      <button
        onClick={() => {
          if (movieType === "latest") {
            movieType = "popular";
            setMovieList(null);
            console.log(movieList);
          } else {
            movieType = "latest";
            setMovieList(null);
            console.log(movieList);
          }
        }}
      >
        Toggle
      </button>

      <MovieList />
    </div>
  );
}
