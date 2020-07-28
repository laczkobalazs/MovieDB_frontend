import React from "react";
import Movie from "./Movie";

export default function MovieList(props) {
  console.log(props);
  let content = "";
  if (props.length !== 0) {
    console.log("if után: " + props[0]);
    content = props.map((movie) => <Movie props={movie} />);
  }
  return <div>{content}</div>;
}
