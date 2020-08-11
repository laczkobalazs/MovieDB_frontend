import React, { useContext, useState, useEffect } from "react";
import MovieList from "./MovieList";
import { LanguageContext } from "../context/LanguageContext";
import axios from "axios";

export default function Experiences(props) {
  const [language, setLanguage] = useContext(LanguageContext);
  const [movieList, setMovieList] = useState([]);
  const [movieType, setMovieType] = useState("liked");

  useEffect(() => {
    if (movieType === "liked") {
      const likedURL = `http://localhost:8080/all-liked-movies/${language}`;
      axios
        .get(likedURL)
        .then((res) => {
          setMovieList(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      const dislikedURL = `http://localhost:8080/all-disliked-movies/${language}`;
      axios
        .get(dislikedURL)
        .then((res) => {
          setMovieList(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [language, movieType]);

  return (
    <div>
      <button
        style={{ borderRadius: "0.3rem", backgroundColor: "green" }}
        disabled={movieType === "liked"}
        onClick={() => {
          setMovieType("liked");
        }}
      >
        Liked Movies
      </button>

      <button
        style={{ borderRadius: "0.3rem", backgroundColor: "red" }}
        disabled={movieType === "disliked"}
        onClick={() => {
          setMovieType("disliked");
        }}
      >
        Disliked Movies
      </button>

      <MovieList movies={movieList} />
    </div>
  );
}
