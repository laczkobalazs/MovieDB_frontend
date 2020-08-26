import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Axios from "axios";
import { LanguageContext } from "../context/LanguageContext";

function DetailedActor() {
  const { actorId } = useParams();
  const [language, setLanguage] = useContext(LanguageContext);
  const [actor, setActor] = useState({});

  useEffect(() => {
    const url = `http://localhost:8080/actor/${actorId}/${language}`;
    Axios.get(url).then((res) => {
      console.log(res.data);
      setActor(res.data);
    });
  }, [actorId, language]);

  return (
    <div class="movie-card">
      <div class="container">
        <div class="hero">
          <div class="details">
            <img
              src={`https://i.pinimg.com/736x/56/96/ac/5696ac07679652e64cd7273266b22daa.jpg`}
              alt=""
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div class="description">
          <div class="column1">
            <img
              src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
              alt="cover"
              class="cover"
              width="auto"
              height="55%"
            />
          </div>
          <div class="column2">
            <div className="rightSideOfColumn">
              <h1 style={{ color: "darkgray" }}>{actor.name}</h1>

              <h2 style={{ color: "black", padding: "1rem" }}>Biography:</h2>
              {actor.biography !== "" ? (
                <p>{actor.biography}</p>
              ) : (
                <p>Nincs leírás / No Biography</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedActor;
