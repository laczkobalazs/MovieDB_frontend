import React from "react";
import "../style/MovieComponent.scss";
import { Link } from "react-router-dom";

function Actor({ actor }) {
  return (
    <div className="movie-container">
      <div className="cellphone-container">
        <div className="movie">
          <Link to={`/actor/${actor.id}`}>
            <div className="movie-img">
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
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
          </Link>
          <div className="text-movie-cont">
            <div className="mr-grid">
              <Link to={`/actor/${actor.id}`}>
                <p>{actor.name}</p>
              </Link>
            </div>
            <div className="mr-grid">
              <p>Department: {actor.known_for_department}</p>
            </div>
            <div className="mr-grid">
              <ol>
                {actor.known_for.map((movie) => (
                  <Link to={`/movie/${movie.id}`}>
                    <li>{movie.title}</li>
                  </Link>
                ))}
              </ol>
            </div>

            <div className="mr-grid action-row">
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

export default Actor;
