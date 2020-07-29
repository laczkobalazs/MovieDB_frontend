import React, { useState } from "react";
import axios from "axios";

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

  return (
    <div>
      <h3>{props.movie.title}</h3>
      {window.location.pathname !== "/watchlist" ? (
        <button type="button" onClick={addToWatchList}>
          Add to watch list
        </button>
      ) : (
        <button type="button" onClick={decideEvent}>
          {deleteUndoButton}
        </button>
      )}

      {window.location.pathname !== "/watched-list" ? (
        <button type="button" onClick={decideEventAddToWatched}>
          {deleteUndoButton3}
        </button>
      ) : (
        <button type="button" onClick={decideEventWatched}>
          {deleteUndoButton2}
        </button>
      )}
    </div>
  );
}

export default Movie;
