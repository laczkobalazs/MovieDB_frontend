import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchResult from "./components/SearchResult";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <SearchBar />
          <Route
            exact
            path="/search-result/:searchString"
            component={SearchResult}
          />
          <Route exact path="/" component={HomePage} />
        </Router>
      </header>
    </div>
  );
}

export default App;
