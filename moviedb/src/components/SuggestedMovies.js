import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import MovieList from "./MovieList";
import { LanguageContext } from "../context/LanguageContext";

export default function SuggestedMovies() {
  const [suggestedMovies, setSuggestedMovies] = useState([]);
  const [language, setLanguage] = useContext(LanguageContext);
  const [movieType, setMovieType] = useState("suggested");

  useEffect(() => {
    if (movieType === "suggested") {
      axios
        .get(`http://localhost:8080/recommendation/suggested/${language}`)
        .then((res) => setSuggestedMovies(res.data.results));
    } else {
      axios
        .get(`http://localhost:8080/recommendation/not-suggested/${language}`)
        .then((res) => setSuggestedMovies(res.data.results));
    }
  }, [language, movieType]);

  return (
    <div>
      <button
        style={{ borderRadius: "0.3rem", backgroundColor: "green" }}
        disabled={movieType === "suggested"}
        onClick={() => {
          setMovieType("suggested");
        }}
      >
        Watch!
      </button>
      <button
        style={{ borderRadius: "0.3rem", backgroundColor: "red" }}
        disabled={movieType === "not suggested"}
        onClick={() => {
          setMovieType("not suggested");
        }}
      >
        Don't watch!
      </button>

      <MovieList movies={suggestedMovies} />
    </div>
  );
}
