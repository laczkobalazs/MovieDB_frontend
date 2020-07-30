import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../MovieComponent.scss";

function Movie(props) {
  const [shortenedOverview, setShortenedOverview] = useState("");

  useEffect(() => {
    if (props.movie.overview) {
      setShortenedOverview(props.movie.overview.slice(0, 200) + "...");
    } else {
      setShortenedOverview("No description.");
    }
  }, [props.movie.overview]);

  const addToLikedMovieList = (e) => {
    axios
      .get(`http://localhost:8080/add/liked-movie/${props.movie.id}`)
      .then((res) => console.log(res));
  };

  const addToDislikedMovieList = (e) => {
    axios
      .get(`http://localhost:8080/add/disliked-movie/${props.movie.id}`)
      .then((res) => console.log(res));
  };

  const [deleteUndoButton, setDeleteUndoButton] = useState(
    "Remove from watch list"
  );

  const addToWatchList = (e) => {
    axios
      .post(`http://localhost:8080/watchlist/add/${props.movie.id}`)
      .then((res) => console.log(res));
  };

  const removeFromWatchList = (e) => {
    axios
      .post(`http://localhost:8080/watchlist/delete/${props.movie.id}`)
      .then((res) => console.log(res));
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
    "Remove from Watched List"
  );

  const removeFromWatched = (e) => {
    axios.get(`http://localhost:8080/delete/watched-movie/${props.movie.id}`);
  };

  const addToWatchedMovies = () => {
    const url = `http://localhost:8080/add/watched-movie/${props.movie.id}`;
    axios.get(url);
  };

  const decideEventWatched = () => {
    switch (deleteUndoButton2) {
      case "Remove from Watched List":
        removeFromWatched();
        setDeleteUndoButton2("Undo");
        break;
      default:
        addToWatchedMovies();
        setDeleteUndoButton2("Remove from watch list");
        break;
    }
  };

  const [deleteUndoButton3, setDeleteUndoButton3] = useState(
    "Add to Watched List"
  );

  const decideEventAddToWatched = () => {
    switch (deleteUndoButton3) {
      case "Add to Watched List":
        addToWatchedMovies();
        setDeleteUndoButton3("Undo");
        break;
      default:
        removeFromWatchedAddToWatch();
        setDeleteUndoButton3("Add to Watched List");
        break;
    }
  };

  const removeFromWatchedAddToWatch = (e) => {
    axios
      .get(`http://localhost:8080/delete-watched/add-watch/${props.movie.id}`)
      .then((res) => console.log(res));
  };

  const [deleteUndoButton4, setDeleteUndoButton4] = useState(
    "Add to Watch List"
  );

  const decideEventAddToWatchList = () => {
    switch (deleteUndoButton4) {
      case "Add to Watch List":
        addToWatchList();
        setDeleteUndoButton4("Undo");
        break;
      default:
        removeFromWatchList();
        setDeleteUndoButton4("Add to Watch List");
        break;
    }
  };

  return (
    <div className="movie-container">
      <div className="cellphone-container">
        <div className="movie">
          <div className="movie-img">
            {props.movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`}
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
                <Link to={`/movie/${props.movie.id}`}>
                  {props.movie.title ? (
                    <h1>{props.movie.title}</h1>
                  ) : (
                    <h1>{props.movie.original_title}</h1>
                  )}
                </Link>
                <ul className="movie-gen">
                  <li>{props.movie.release_date} /</li>
                  <li>{props.movie.popularity} /</li>
                  <li>language: {props.movie.original_language}</li>
                </ul>
              </div>
            </div>
            <div className="mr-grid summary-row">
              <div className="col2">
                <h5>SUMMARY</h5>
              </div>
              <div className="col2">
                <ul className="movie-likes">
                  <li>
                    <i className="material-icons">&#xE813;</i>124
                  </li>
                  <li>
                    <i className="material-icons">&#xE813;</i>3
                  </li>
                </ul>
              </div>
            </div>
            <div className="mr-grid">
              <div className="col1">
                <p className="movie-description">{shortenedOverview}</p>
              </div>
            </div>
            <div className="mr-grid action-row">
              <div className="col2">
                {window.location.pathname !== "/watched-list" ? (
                  <div className="watch-btn" onClick={decideEventAddToWatched}>
                    <h3>{deleteUndoButton3}</h3>
                  </div>
                ) : (
                  <div className="watch-btn" onClick={decideEventWatched}>
                    <h3>{deleteUndoButton2}</h3>
                  </div>
                )}
                {window.location.pathname !== "/watchlist" ? (
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
                {/* <div className="watch-btn" onClick={addToLikedMovieList}>
                  <h3>Like</h3>
                </div>
                <div className="watch-btn" onClick={addToDislikedMovieList}>
                  <h3>Dislike</h3>
                </div> */}
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
