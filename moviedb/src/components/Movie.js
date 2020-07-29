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

  return (
    <div>
      <h1>{props.movie.title}</h1>
      <p>{props.movie.original_language}</p>
      <p>{props.movie.release_date}</p>
      <p>{props.movie.popularity}</p>
      <p>{props.movie.overview}</p>
      {window.location.pathname !== "/watchlist" ? (
        <button type="button" onClick={addToWatchList}>
          Add to watch list
        </button>
      ) : (
        <button type="button" onClick={decideEvent}>
          {deleteUndoButton}
        </button>
      )}
    </div>
  );
}

export default Movie;
