import React from "react";

function Movie(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.original_language}</p>
      <p>{props.release_date}</p>
      <p>{props.popularity}</p>
      <p>{props.overview}</p>
    </div>
  );
}

export default Movie;
