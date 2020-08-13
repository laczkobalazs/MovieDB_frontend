import React from "react";
import Movie from "./Movie";

export default function MovieList(props) {
  let idCounter = 1;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.movies.map((movie) => (
        <Movie movie={movie} key={idCounter++} />
      ))}
    </div>
  );
}
