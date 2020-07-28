import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { HomepageContext } from "../context/HomepageContext";

export default function HomePage(props) {
  const [latestMovies] = useContext(HomepageContext);
  const [popularMovies] = useContext(HomepageContext);

  return (
    <div>
      {latestMovies.map((movie) => (
        <p>{movie.overview}</p>
      ))}
    </div>
  );
}
