import React from "react";
import Movie from "./Movie";

export default function MovieList(props) {
  return (
    <div>
      {props.movies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
}
