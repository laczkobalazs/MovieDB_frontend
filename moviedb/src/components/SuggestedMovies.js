import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "./MovieList";

export default function SuggestedMovies() {
  const [suggestedMovies, setSuggestedMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/recommendation/suggested")
      .then((res) => setSuggestedMovies(res.data.results));
  }, []);

  return (
    <div>
      <MovieList movies={suggestedMovies} />
    </div>
  );
}
