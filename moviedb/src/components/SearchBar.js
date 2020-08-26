import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/SearchBarStyle.css";
import Movie from "./Movie";

function SearchBar() {
  const [searchString, setSearchString] = useState("");
  const [searchType, setSearchType] = useState("movie");

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && searchString) {
      alert(searchType);
      redirectToResult();
    }
  };

  const redirectToResult = () => {
    window.location.replace(`/search-result/${searchString}/${searchType}`);
  };

  // const handleChecked = (e) => {
  //   console.log(e.target.value);
  //   if (e.target.value === searchType) {
  //     console.log(e.target.value);
  //     return true;
  //   }
  //   return false;
  // };

  return (
    <div style={{ margin: "0.5rem" }}>
      <div className="radioButton">
        <input
          id="searchTypeChoice1"
          type="radio"
          name="search-type"
          value="movie"
          checked={true}
          onChange={() => setSearchType("movie")}
        />
        <spam> Movie</spam>

        <input
          type="radio"
          name="search-type"
          value="person"
          onChange={() => setSearchType("person")}
        />
        <spam> Stars</spam>
      </div>

      <input
        type="search"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="search-button"
        disabled={!searchString}
        onClick={redirectToResult}
      >
        Search!
      </button>
    </div>
  );
}

export default SearchBar;
