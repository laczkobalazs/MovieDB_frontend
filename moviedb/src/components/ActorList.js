import React from "react";
import Actor from "./Actor";

export default function ActorList(props) {
  let idCounter = 1;
  return (
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
  );
}
