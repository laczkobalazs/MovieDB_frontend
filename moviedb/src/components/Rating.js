import React, { useState } from "react";
import Axios from "axios";

function Rating({ id, prevRating, voteCount }) {
  const [rating, setRating] = useState(prevRating);

  const sendRating = () => {
    Axios.post(`http://localhost:8080/rate-movie/${id}/${rating}`);
  };

  const changeRating = (event) => {
    setRating(event.target.value);
  };

  return (
    <div>
      <input
        onChange={changeRating}
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        max="10"
        step="0.5"
      ></input>
      <button onClick={sendRating}>Rate!</button>
      <p>
        {prevRating} {voteCount}
      </p>
    </div>
  );
}

export default Rating;
