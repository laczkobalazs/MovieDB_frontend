import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import MovieList from "./MovieList";
import { LanguageContext } from "../context/LanguageContext";
import "../style/MyCollection.css";

export default function SuggestedMovies() {
  const [suggestedMovies, setSuggestedMovies] = useState([]);
  const [language, setLanguage] = useContext(LanguageContext);
  const [movieType, setMovieType] = useState("suggested");
  const cookieValue = document.cookie.split("=")[1];

  useEffect(() => {
    if (movieType === "suggested") {
      axios
        .get(`http://localhost:8080/recommendation/suggested/${language}`, {
          withCredentials: true,
          headers: { Authorization: cookieValue },
        })
        .then((res) => setSuggestedMovies(res.data.results));
    } else {
      axios
        .get(`http://localhost:8080/recommendation/not-suggested/${language}`, {
          withCredentials: true,
          headers: { Authorization: cookieValue },
        })
        .then((res) => setSuggestedMovies(res.data.results));
    }
  }, [cookieValue, language, movieType]);

  return (
    <div>
      <div className="buttonsArea">
        <button
          className="like"
          disabled={movieType === "suggested"}
          onClick={() => {
            setMovieType("suggested");
          }}
        >
          Suggested
        </button>

        <button
          className="dislike"
          disabled={movieType === "not suggested"}
          onClick={() => {
            setMovieType("not suggested");
          }}
        >
          Not-Suggested
        </button>
      </div>
      <MovieList movies={suggestedMovies} />
    </div>
  );
}
