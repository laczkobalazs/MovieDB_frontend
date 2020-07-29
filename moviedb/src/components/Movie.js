import React from "react";

function Movie(props) {
  console.log("movie.js vagyok: " + props.movie);
  return (
    <div>
      <h1>{props.movie.title}</h1>
      <p>{props.movie.original_language}</p>
      <p>{props.movie.release_date}</p>
      <p>{props.movie.popularity}</p>
      <p>{props.movie.overview}</p>
    </div>
  );
}

export default Movie;
