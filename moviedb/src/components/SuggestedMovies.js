import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import MovieList from "./MovieList";
import { LanguageContext } from "../context/LanguageContext";

export default function SuggestedMovies() {
  const [suggestedMovies, setSuggestedMovies] = useState([]);
  const [language, setLanguage] = useContext(LanguageContext);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/recommendation/suggested/${language}`)
      .then((res) => setSuggestedMovies(res.data.results));
  }, [language]);

  return (
    <div>
      <MovieList movies={suggestedMovies} />
    </div>
  );
}
