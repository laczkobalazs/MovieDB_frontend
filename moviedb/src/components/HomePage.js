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
        style={{ borderRadius: "0.3rem" }}
        disabled={movieType === "latest"}
        onClick={() => {
          setMovieType("latest");
          setMovieList(latestMovies);
        }}
      >
        Movies in Theatres
      </button>
      <button
        style={{ borderRadius: "0.3rem" }}
        disabled={movieType === "popular"}
        onClick={() => {
          setMovieType("popular");
          setMovieList(popularMovies);
        }}
      >
        Popular Movies
      </button>

      <MovieList movies={movieList} />
    </div>
  );
}
