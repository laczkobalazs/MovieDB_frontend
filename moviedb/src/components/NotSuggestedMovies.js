import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "./MovieList";

export default function NotSuggestedMovies() {
  const [notSuggestedMovies, setNotSuggestedMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/recommendation/not-suggested")
      .then((res) => setNotSuggestedMovies(res.data.results));
  }, []);

  return (
    <div>
      <MovieList movies={notSuggestedMovies} />
    </div>
  );
}
