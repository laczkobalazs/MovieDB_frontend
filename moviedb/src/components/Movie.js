import React from "react";
import axios from "axios";

function Movie(props) {
  console.log("movie.js vagyok: " + props.movie);

  const addToWatchedMovies = () => {
    const url = `http://localhost:8080/add/watched-movie/${props.movie.id}`;
    axios.get(url);
  };

  return (
    <div>
      <h1>{props.movie.title}</h1>
      <p>{props.movie.original_language}</p>
      <p>{props.movie.release_date}</p>
      <p>{props.movie.popularity}</p>
      <p>{props.movie.overview}</p>
      <p>{props.movie.id}</p>
      <button onClick={addToWatchedMovies}>Add to Watched Movies.</button>
    </div>
  );
}

export default Movie;
