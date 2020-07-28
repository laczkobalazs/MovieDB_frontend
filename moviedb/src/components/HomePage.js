import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { HomepageContext } from "../context/HomepageContext";
import MovieList from "./MovieList";

export default function HomePage(props) {
  const [latestMovies] = useContext(HomepageContext);
  const [popularMovies] = useContext(HomepageContext);

  console.log("homepage: " + latestMovies);

  return (
    <div>
      <MovieList props={latestMovies} />
      <MovieList props={popularMovies} />
    </div>
  );
}
