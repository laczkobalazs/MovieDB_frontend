import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../SearchBarStyle.css";

function SearchBar() {
  const [searchString, setSearchString] = useState("");

  return (
    <div style={{ margin: "0.5rem" }}>
      <input
        type="search"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      <button className="search-button" disabled={!searchString}>
        <Link
          to={`/search-result/${searchString}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          Search!
        </Link>
      </button>
    </div>
  );
}

export default SearchBar;
