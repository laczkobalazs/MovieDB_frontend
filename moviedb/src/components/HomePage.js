import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import MovieList from "./MovieList";

export default function HomePage(props) {
  const [latestMovies, setLatestMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const latestURL = `http://localhost:8080/latest-movies`;
    const popularURL = `http://localhost:8080/popular-movies`;

    axios
      .get(latestURL)
      .then((res) => setLatestMovies(res.data.results))
      .catch((err) => console.log(err));

    axios
      .get(popularURL)
      .then((res) => setPopularMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  console.log("homepage: " + latestMovies);

  return (
    <div>
      <MovieList props={latestMovies} />
      <MovieList props={popularMovies} />
    </div>
  );
}
