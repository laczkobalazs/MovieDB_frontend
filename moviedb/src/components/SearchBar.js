import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/SearchBarStyle.css";

function SearchBar() {
  const [searchString, setSearchString] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && searchString) {
      redirectToResult();
    }
  };

  const redirectToResult = () => {
    window.location.replace(`/search-result/${searchString}`);
  };

  return (
    <div style={{ margin: "0.5rem" }}>
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
