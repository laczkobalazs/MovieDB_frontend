import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import MovieList from "./MovieList";
import { LanguageContext } from "../context/LanguageContext";

export default function NotSuggestedMovies() {
  const [notSuggestedMovies, setNotSuggestedMovies] = useState([]);
  const [language, setLanguage] = useContext(LanguageContext);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/recommendation/not-suggested/${language}`)
      .then((res) => setNotSuggestedMovies(res.data.results));
  }, [language]);

  return (
    <div>
      <MovieList movies={notSuggestedMovies} />
    </div>
  );
}
