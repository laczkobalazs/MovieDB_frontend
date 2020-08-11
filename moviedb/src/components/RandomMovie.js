import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import MovieList from "./MovieList";
import { LanguageContext } from "../context/LanguageContext";

export default function RandomMovie() {
  const [randomMovie, setRandomMovie] = useState([]);
  const [language, setLanguage] = useContext(LanguageContext);

  useEffect(() => {
    const url = `http://localhost:8080/random-movie/${language}`;
    axios.get(url).then((res) => setRandomMovie([res.data]));
  }, [language]);

  return (
    <div>
      <MovieList movies={randomMovie} />
    </div>
  );
}
