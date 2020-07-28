import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

export default function HomePage(props) {
  const [latestMovies, setLatesMovies] = useState([]);

  useEffect(() => {
    const url = `http://localhost:8080/latest-movies`;
    axios
      .get(url)
      .then((res) => setLatesMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {latestMovies.map((movie) => (
        <p>{movie.overview}</p>
      ))}
    </div>
  );
}
