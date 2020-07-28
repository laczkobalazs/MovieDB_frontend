import React from "react";
import Movie from "./Movie";

export default function MovieList(props) {
  return (
    <div>
      {props.movieList.map((movie) => (
        <Movie movie={movie} />
      ))}
    </div>
  );
}
