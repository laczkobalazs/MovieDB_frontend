import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Axios from "axios";
import "../DetailedPage.css";
import { Link } from "react-router-dom";

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
            <div class="hero">
              <div class="details">
                {movie.backdrop_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt=""
                    width="100%"
                    height="100%"
                  />
                ) : (
                  <img
                    src={`https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6`}
                    alt=""
                    width="100%"
                    height="100%"
                  />
                )}
              </div>
            </div>

            <div class="description">
              <div class="column1">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt="cover"
                  class="cover"
                  width="auto"
                  height="55%"
                />
              </div>

              <div class="column2">
                <h1 style={{ color: "darkgray" }}>{movie.title}</h1>
                <div>
                  <p>
                    <span>{movie.release_date} / </span>
                    <span>{movie.runtime} min. / </span>
                    {movie.budget !== 0 ? (
                      <span>{movie.budget / 1000000} million $</span>
                    ) : (
                      <span>No info about budget</span>
                    )}
                  </p>
                </div>
                <p>
                  {movie.overview}
                  <br />
                  <a href={movie.homepage} target="_blank">
                    More details about it
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DetailedMovie;
