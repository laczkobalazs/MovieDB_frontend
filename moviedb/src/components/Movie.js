import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Movie(props) {
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

  const addToWatchedMovies = () => {
    const url = `http://localhost:8080/add/watched-movie/${props.movie.id}`;
    axios.get(url);
  };

  return (
    <div>
      <Link to={`/movie/${props.movie.id}`}>
        <h3>{props.movie.title}</h3>
      </Link>
      <img
        src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`}
        alt=""
        width="20%"
        height="auto"
      />
      {window.location.pathname !== "/watchlist" ? (
        <button type="button" onClick={addToWatchList}>
          Add to watch list
        </button>
      ) : (
        <button type="button" onClick={decideEvent}>
          {deleteUndoButton}
        </button>
      )}
      <button onClick={addToWatchedMovies}>Add to Watched Movies.</button>
    </div>
  );
}

export default Movie;
