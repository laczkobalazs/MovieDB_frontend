import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "./MovieList";

export default function RandomMovie() {
  const [randomMovie, setRandomMovie] = useState([]);

  useEffect(() => {
    const url = "http://localhost:8080/random-movie";
    axios.get(url).then((res) => setRandomMovie([res.data]));
  }, []);

  return (
    <div>
      <MovieList movies={randomMovie} />
    </div>
  );
}
