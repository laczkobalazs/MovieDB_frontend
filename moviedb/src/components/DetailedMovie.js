import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import Axios from "axios";
import "../style/DetailedPage.css";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const Warning = styled.h1`
  position: absolute;
  top: 35%;
  left: 37%;
  color: red;
`;

function DetailedMovie() {
  const { movieId } = useParams();
  const [movies, setMovie] = useState([]);
  const [videoURL, setVideoURL] = useState("");
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);

  const [language, setLanguage] = useContext(LanguageContext);
  console.log(language);
  useEffect(() => {
    Axios.get(`http://localhost:8080/movie/${movieId}/${language}`).then(
      (res) => {
        setMovie([res.data]);
      }
    );
  }, [movieId, language]);

  useEffect(() => {
    Axios.get(`http://localhost:8080/movie-url/${movieId}`).then((res) => {
      if (res.data.results[0]) {
        setVideoURL([res.data.results[0].key]);
      }
    });
  }, [movieId]);

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: "60%",
      height: "60%",
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();

  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <span className="close" onClick={() => setOpen(false)}>
            X
          </span>
          {videoURL !== "" ? (
            <iframe
              width="100%"
              height="100%"
              title="trailer"
              src={`https://www.youtube.com/embed/${videoURL}?autoplay=1`}
            ></iframe>
          ) : (
            <Warning>{"No trailer found :("}</Warning>
          )}
        </div>
      </Modal>

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
                <div class="player" onClick={() => setOpen(true)}>
                  <span>Play</span>
                </div>
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
                <div>
                  {movie.credits.cast.slice(0, 5).map((star) => (
                    <p>{star.name}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DetailedMovie;
