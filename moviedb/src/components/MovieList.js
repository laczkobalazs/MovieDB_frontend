import React, { useContext } from "react";
import { HomepageMovieListContext } from "../context/HomepageMovieListContext";
import Movie from "./Movie";

export default function MovieList(props) {
  const [movieList, setMovieList] = useContext(HomepageMovieListContext);

  return (
    <div>
      {movieList.map((movie) => (
        <Movie movie={movie} />
      ))}
    </div>
  );
}
