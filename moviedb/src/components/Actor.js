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
              <div className="col1">
                <Link to={`/actor/${actor.id}`}>
                  <h2 style={{ fontSize: "1.5rem" }}>{actor.name}</h2>
                </Link>
              </div>
            </div>
            <div className="col1">
              <ul className="movie-gen">
                <li style={{ fontSize: "1rem" }}>
                  {actor.known_for_department}
                </li>
              </ul>
            </div>
            <br />
            <div className="mr-grid">
              <div className="col1">
                <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  Known for:
                </h3>
                <br />
              </div>

              <ol>
                {actor.known_for.map((movie) => (
                  <div className="mr-grid">
                    <div className="col1">
                      <Link to={`/movie/${movie.id}`}>
                        <li style={{ fontSize: "1.5rem", color: "#e7e7e7" }}>
                          {movie.title}
                        </li>
                      </Link>
                    </div>
                  </div>
                ))}
              </ol>
            </div>
          </div>
          <div className="mr-grid action-row">
            <div className="col6 action-btn"></div>
            <div className="col6 action-btn"></div>
            <div className="col6 action-btn"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Actor;
