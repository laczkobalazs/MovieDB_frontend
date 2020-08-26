import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router";
import MovieList from "./MovieList";
import { LanguageContext } from "../context/LanguageContext";
import "../style/SearchResult.css";
import ActorList from "./ActorList";

function SearchResult(props) {
  const [results, setResults] = useState([]);
  const { searchString } = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  const [maxPageNumber, setMaxPageNumber] = useState(0);
  const [language, setLanguage] = useContext(LanguageContext);
  const { searchType } = useParams();

  useEffect(() => {
    setPageNumber(1);
  }, [searchString]);

  useEffect(() => {
    console.log(searchType);
    const url = `http://localhost:8080/search-result/${searchString}&page=${pageNumber}/${language}/${searchType}`;
    axios.get(url).then((res) => {
      setResults(res.data.results);
      setMaxPageNumber(res.data.total_pages);
    });
  }, [pageNumber, searchString, language, searchType]);

  const increasePageNumber = () => {
    let newPageNumber = pageNumber + 1;
    setPageNumber(newPageNumber);
  };

  const decreasePageNumber = () => {
    let newPageNumber = pageNumber - 1;
    setPageNumber(newPageNumber);
  };

  return (
    <div>
      <p>
        Pages: {pageNumber}/{maxPageNumber}
      </p>
      <div className="buttonsArea">
        <button
          className="prev"
          onClick={decreasePageNumber}
          disabled={pageNumber === 1}
        >
          Prev
        </button>
        <button
          className="next"
          onClick={increasePageNumber}
          disabled={pageNumber >= maxPageNumber}
        >
          Next
        </button>
      </div>

      {searchType === "movie" ? (
        <MovieList movies={results} />
      ) : (
        <ActorList actors={results} />
      )}
    </div>
  );
}

export default SearchResult;
