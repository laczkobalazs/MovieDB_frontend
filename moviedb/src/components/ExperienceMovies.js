import React, { useContext, useState } from "react";
import MovieList from "./MovieList";
import { ExperienceContext } from "../context/ExperienceContext";
import { DislikedMovieContext } from "../context/DislikedMovieContext";
import { LikedMovieContext } from "../context/LikedMovieContext";

export default function Experiences(props) {
  const [movieList, setMovieList] = useContext(ExperienceContext);

  const [likedList, setLikedList] = useContext(LikedMovieContext);
  const [dislikedList, setDislikedList] = useContext(DislikedMovieContext);

  const [movieType, setMovieType] = useState("liked");

  return (
    <div>
      <button
        onClick={() => {
          if (movieType === "liked") {
            setMovieType("disliked");
            setMovieList(dislikedList);
          } else {
            setMovieType("liked");
            setMovieList(likedList);
          }
        }}
      >
        Toggle
      </button>
      <MovieList movies={movieList} />
    </div>
  );
}
