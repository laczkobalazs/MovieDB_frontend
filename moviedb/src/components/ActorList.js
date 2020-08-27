import React from "react";
import Actor from "./Actor";
import SearchBar from "./SearchBar";

export default function ActorList(props) {
  let idCounter = 1;
  return (
    <div>
      <SearchBar />
      <h1 style={{ color: "white" }}>Actors</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.actors.map((actor) => (
          <Actor actor={actor} key={idCounter++} />
        ))}
      </div>
    </div>
  );
}
