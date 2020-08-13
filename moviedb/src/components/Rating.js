import React, { useState } from "react";
import Axios from "axios";
import StarRatings from "react-star-ratings";
import "../style/MovieComponent.scss";

function Rating({ id, prevRating, voteCount }) {
  const [rating, setRating] = useState(prevRating);
  const [starRating, setStarRating] = useState(0);

  function sendRating(newRating) {
    Axios.post(
      `http://localhost:8080/rate-movie/${id}/${newRating}`
    ).then((res) => console.log("élek"));
  }

  function changeRating(newRating, name) {
    setRating(newRating);
    sendRating(newRating);
    setStarRating(newRating);
  }

  return (
    <div>
      <p className="movie-description">
        <StarRatings
          rating={1}
          numberOfStars={1}
          starRatedColor="yellow"
          starDimension="17px"
          starSpacing="8px"
        />
        {prevRating} from {voteCount} votes
      </p>
      <StarRatings
        rating={starRating}
        numberOfStars={10}
        changeRating={changeRating}
        starRatedColor="yellow"
        starHoverColor="yellow"
        starDimension="20px"
        starSpacing="2px"
      />
    </div>
  );
}

export default Rating;
