import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router";
import MovieList from "./MovieList";
import { LanguageContext } from "../context/LanguageContext";
import "../style/SearchResult.css";

function GenreSearchResult() {
  const [results, setResults] = useState([]);
  const { genreId } = useParams();
  const { page } = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  const [maxPageNumber, setMaxPageNumber] = useState(0);
  const [language, setLanguage] = useContext(LanguageContext);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/genre-search/${genreId}/${pageNumber}/${language}`
      )
      .then((res) => {
        setResults(res.data.results);
        setMaxPageNumber(res.data.total_pages);
      });
  }, [pageNumber, genreId, page, language]);

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

      <MovieList movies={results} />
    </div>
  );
}

export default GenreSearchResult;
