import React from "react";
import Movie from "./Movie";
import SearchBar from "./SearchBar";

export default function MovieList(props) {
  let idCounter = 1;
  return (
    <div>
      <SearchBar />
      <h1 style={{ color: "white" }}>Movies</h1>
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
    </div>
  );
}
