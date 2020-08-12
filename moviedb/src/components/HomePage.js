import React, { useState, useContext, useEffect } from "react";
import MovieList from "./MovieList";
import { LanguageContext } from "../context/LanguageContext";
import axios from "axios";
import "../style/HomepageButtons.css";

export default function HomePage(props) {
  const [language, setLanguage] = useContext(LanguageContext);
  const [movieList, setMovieList] = useState([]);
  const [movieType, setMovieType] = useState("latest");

  useEffect(() => {
    if (movieType === "latest") {
      const latestURL = `http://localhost:8080/latest-movies/${language}`;
      axios
        .get(latestURL)
        .then((res) => {
          setMovieList(res.data.results);
        })
        .catch((err) => console.log(err));
    } else {
      const popularURL = `http://localhost:8080/popular-movies/${language}`;
      axios
        .get(popularURL)
        .then((res) => {
          setMovieList(res.data.results);
        })
        .catch((err) => console.log(err));
    }
  }, [language, movieType]);
  return (
    <div>
      <div className="buttonsArea">
        <button
          className="theatre"
          disabled={movieType === "latest"}
          onClick={() => {
            setMovieType("latest");
          }}
        >
          Movies in Theatres
        </button>

        <button
          className="popular"
          disabled={movieType === "popular"}
          onClick={() => {
            setMovieType("popular");
          }}
        >
          Popular Movies
        </button>
      </div>

      <MovieList movies={movieList} />
    </div>
  );
}
