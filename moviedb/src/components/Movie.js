import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { RefreshContext } from "../context/RefreshContext";
import "../style/MovieComponent.scss";
import Rating from "../components/Rating";
import { WatchWatchedContext } from "../context/WatchWatchedContext";

function Movie({ movie }) {
  const [shortenedOverview, setShortenedOverview] = useState("");
  const [refresh, setRefresh] = useContext(RefreshContext);
  const [watchWatched, setWatchWatched] = useContext(WatchWatchedContext);

  useEffect(() => {
    if (movie.overview) {
      setShortenedOverview(movie.overview.slice(0, 200) + "...");
    } else {
      setShortenedOverview("No description.");
    }
  }, [movie.overview]);

  const addToLikedMovieList = (e) => {
    axios
      .get(`http://localhost:8080/add/liked-movie/${movie.id}`)
      .then((res) => setRefresh(refresh + 1));
  };

  const addToDislikedMovieList = (e) => {
    axios
      .get(`http://localhost:8080/add/disliked-movie/${movie.id}`)
      .then((res) => setRefresh(refresh + 1));
  };

  const [deleteUndoButton, setDeleteUndoButton] = useState(
    "Remove from watch list"
  );

  const addToWatchList = (e) => {
    axios
      .post(`http://localhost:8080/watchlist/add/${movie.id}`)
      .then((res) => setRefresh(refresh + 1));
  };

  const removeFromWatchList = (e) => {
    axios
      .post(`http://localhost:8080/watchlist/delete/${movie.id}`)
      .then((res) => setRefresh(refresh + 1));
  };

  const decideEvent = () => {
    switch (deleteUndoButton) {
      case "Remove from watch list":
        removeFromWatchList();
        setDeleteUndoButton("Undo");
        break;
      default:
        addToWatchList();
        setDeleteUndoButton("Remove from watch list");
        break;
    }
  };

  const [deleteUndoButton2, setDeleteUndoButton2] = useState(
    "Remove from watched list"
  );

  const removeFromWatched = (e) => {
    axios
      .get(`http://localhost:8080/delete/watched-movie/${movie.id}`)
      .then((res) => setRefresh(refresh + 1));
  };

  const addToWatchedMovies = () => {
    const url = `http://localhost:8080/add/watched-movie/${movie.id}`;
    axios.get(url).then((res) => setRefresh(refresh + 1));
  };

  const decideEventWatched = () => {
    switch (deleteUndoButton2) {
      case "Remove from watched list":
        removeFromWatched();
        setDeleteUndoButton2("Undo");
        break;
      default:
        addToWatchedMovies();
        setDeleteUndoButton2("Remove from watched list");
        break;
    }
  };

  const [deleteUndoButton3, setDeleteUndoButton3] = useState("Seen it!");

  const decideEventAddToWatched = () => {
    switch (deleteUndoButton3) {
      case "Seen it!":
        addToWatchedMovies();
        removeFromWatchList();
        setDeleteUndoButton3("Undo");
        break;
      default:
        removeFromWatched();
        setDeleteUndoButton3("Seen it!");
        break;
    }
  };

  const removeFromWatchedAddToWatch = (e) => {
    axios.get(`http://localhost:8080/delete-watched/add-watch/${movie.id}`);
  };

  const [deleteUndoButton4, setDeleteUndoButton4] = useState("Want to see it!");

  const decideEventAddToWatchList = () => {
    switch (deleteUndoButton4) {
      case "Want to see it!":
        addToWatchList();
        removeFromWatched();
        setDeleteUndoButton4("Undo");
        break;
      default:
        removeFromWatchList();
        setDeleteUndoButton4("Want to see it!");
        break;
    }
  };

  function isItWatchList() {
    if (
      (watchWatched === "watch" && window.location.pathname === "/watchlist") ||
      window.location.pathname !== "/watchlist"
    ) {
      return true;
    }
    return false;
  }

  function isItWatchedList() {
    if (
      (watchWatched === "watched" &&
        window.location.pathname === "/watchlist") ||
      window.location.pathname !== "/watchlist"
    ) {
      return true;
    }
    return false;
  }

  return (
    <div className="movie-container">
      <div className="cellphone-container">
        <div className="movie">
          <div className="movie-img">
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt=""
                width="100%"
                heigth="auto"
              />
            ) : (
              <img
                src={`https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6`}
                alt=""
                width="100%"
                heigth="auto"
              />
            )}
          </div>
          <div className="text-movie-cont">
            <div className="mr-grid">
              <div className="col1">
                <Link to={`/movie/${movie.id}`}>
                  {movie.title ? (
                    <h2>{movie.title}</h2>
                  ) : (
                    <h2>{movie.original_title}</h2>
                  )}
                </Link>
                {window.location.pathname === "/watched-list" ? (
                  <Rating
                    id={movie.id}
                    prevRating={movie.vote_average}
                    voteCount={movie.vote_count}
                  />
                ) : (
                  <div></div>
                )}
                <ul className="movie-gen">
                  <li>{movie.release_date} /</li>
                  <li>popularity: {movie.popularity} /</li>
                  <li>language: {movie.original_language}</li>
                </ul>
              </div>
            </div>
            <div className="mr-grid summary-row">
              <div className="col2">
                <h5>SUMMARY</h5>
              </div>
              <img
                className="likeDislike"
                onClick={addToLikedMovieList}
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
                }
                alt=""
              />
              <img
                className="likeDislike"
                onClick={addToDislikedMovieList}
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Broken_heart.svg/586px-Broken_heart.svg.png"
                }
                alt=""
              />
            </div>
            <div className="mr-grid">
              <div className="col1">
                <p className="movie-description">{shortenedOverview}</p>
              </div>
            </div>
            <div className="mr-grid action-row">
              <div className="col2">
                {isItWatchList() ? (
                  <div className="watch-btn" onClick={decideEventAddToWatched}>
                    <h3>{deleteUndoButton3}</h3>
                  </div>
                ) : (
                  <div className="watch-btn" onClick={decideEventWatched}>
                    <h3>{deleteUndoButton2}</h3>
                  </div>
                )}
                {isItWatchedList() ? (
                  <div
                    className="watch-btn"
                    onClick={decideEventAddToWatchList}
                  >
                    <h3>{deleteUndoButton4}</h3>
                  </div>
                ) : (
                  <div className="watch-btn" onClick={decideEvent}>
                    <h3>{deleteUndoButton}</h3>
                  </div>
                )}
              </div>
              <div className="col6 action-btn"></div>
              <div className="col6 action-btn"></div>
              <div className="col6 action-btn"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
