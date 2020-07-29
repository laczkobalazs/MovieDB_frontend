import React, { useState } from "react";
import { Link } from "react-router-dom";

function SearchBar() {
  const [searchString, setSearchString] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      <button disabled={!searchString}>
        <Link
          to={`/search-result/${searchString}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          search
        </Link>
      </button>
    </div>
  );
}

export default SearchBar;