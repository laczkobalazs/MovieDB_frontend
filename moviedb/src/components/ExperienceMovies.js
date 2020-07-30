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
        style={{ borderRadius: "0.3rem", backgroundColor: "green" }}
        disabled={movieType === "liked"}
        onClick={() => {
          setMovieType("liked");
          setMovieList(likedList);
        }}
      >
        Liked Movies
      </button>

      <button
        style={{ borderRadius: "0.3rem", backgroundColor: "red" }}
        disabled={movieType === "disliked"}
        onClick={() => {
          setMovieType("disliked");
          setMovieList(dislikedList);
        }}
      >
        Disliked Movies
      </button>

      <MovieList movies={movieList} />
    </div>
  );
}
