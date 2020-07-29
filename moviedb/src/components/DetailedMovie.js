import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Axios from "axios";
import "../DetailedPage.css";

function DetailedMovie() {
  const { movieId } = useParams();
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:8080/movie/${movieId}`).then((res) =>
      setMovie([res.data])
    );
  }, [movieId]);

  return (
    <div>
      {movies.map((movie) => (
        <div class="movie-card">
          <div class="container">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="cover"
              class="cover"
              width="50%"
              height="auto"
            />

            <div class="hero">
              <div class="details">
                <div class="title1">
                  {movie.original_title}
                  <span>PG-13</span>
                </div>

                <span class="likes">109 likes</span>
              </div>
            </div>
          </div>

          <div class="description">
            <div class="column1">
              <span class="tag">action</span>
              <span class="tag">fantasy</span>
              <span class="tag">adventure</span>
            </div>

            <div class="column2">
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DetailedMovie;
