import React, { useState, useContext, useEffect } from "react";
import { PopularMovieContext } from "../context/PopularMovieContext";
import { LatestMovieContext } from "../context/LatestMovieContext";
import { HomepageContext } from "../context/HomepageContext";
import MovieList from "./MovieList";
import { LanguageContext } from "../context/LanguageContext";
import axios from "axios";

export default function HomePage(props) {
  const [language, setLanguage] = useContext(LanguageContext);
  const [popularMovies, setPopularMovies] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [movieType, setMovieType] = useState("latest");

  useEffect(() => {
    const latestURL = `http://localhost:8080/latest-movies/${language}`;
    axios
      .get(latestURL)
      .then((res) => {
        setLatestMovies(res.data.results);
        if (movieType === "latest") {
          setMovieList(res.data.results);
          console.log(language);
        }
      })
      .catch((err) => console.log(err));
    const popularURL = `http://localhost:8080/popular-movies`;
    axios
      .get(popularURL)
      .then((res) => {
        setPopularMovies(res.data.results);
        if (movieType === "popular") {
          setMovieList(popularMovies);
          console.log(popularMovies);
        }
      })
      .catch((err) => console.log(err));
  }, [language]);
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
