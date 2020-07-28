import React, { useState, useEffect, useContext } from "react";
import { HomepageContext } from "../context/HomepageContext";
import MovieList from "./MovieList";

export default function HomePage(props) {
  const [latestMovies] = useContext(HomepageContext);
  const [popularMovies] = useContext(HomepageContext);

  return (
    <div>
      <MovieList movieList={latestMovies} />
      <MovieList movieList={popularMovies} />
    </div>
  );
}
