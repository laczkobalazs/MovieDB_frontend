import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Axios from "axios";
import { LanguageContext } from "../context/LanguageContext";
import SearchBar from "./SearchBar";
import "../style/DetailedActor.sass";

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
    <div style={{ width: "100%" }}>
      <SearchBar />
      <div class="person-card-container">
        <div class="person-card">
          <div class="person-card-photo">
            <img
              src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
              alt="a really big star"
            />
          </div>
          <div class="person-card-info">
            <h2>
              {actor.name} ({actor.known_for_department})
            </h2>
            <br />
            {actor.biography !== "" ? (
              <p>{actor.biography}</p>
            ) : (
              <p>Nincs leírás / No Biography</p>
            )}
            <div
              style={{
                position: "absolute",
                top: "18rem",
                left: "6rem",
                width: "15rem",
              }}
            >
              <h4 style={{ fontSize: "1rem" }}>
                {language === "hu" ? "Születésnap: " : "Birthday: "}{" "}
                {actor.birthday}
              </h4>
              <h4 style={{ fontSize: "1rem" }}>
                {language === "hu" ? "Nem: " : "Gender: "}
                {actor.gender === 1
                  ? language === "hu"
                    ? "Nő"
                    : "Woman"
                  : language === "hu"
                  ? "Férfi"
                  : "Man"}
              </h4>
              <h4 style={{ fontSize: "1rem" }}>
                {language === "hu" ? "Születési hely: " : "Place of birth: "}
                {actor.place_of_birth}
              </h4>
              {actor.deathday ? (
                <h4 style={{ fontSize: "1rem" }}>
                  {language === "hu" ? "Halála napja: " : "Date of death: "}
                  {actor.deathday}
                </h4>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedActor;
