import React, { useEffect } from "react";
import "../style/NavbarStyle.css";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";

export default function Navbar() {
  const [language, setLanguage] = useContext(LanguageContext);
  return (
    <div className="header">
      <a className="home" href="/" id="logo" target="_blank">
        The Movie Database
      </a>
      <button onClick={() => setLanguage("en")}>Language</button>
      <nav>
        <ul>
          <li>
            <a href="/">
              <i class="icon-home"></i>Home
            </a>
          </li>
          <li>
            <a href="/experiences">
              <i class="icon-heart"></i>My collection
            </a>
          </li>
          <li>
            <a href="/watchlist">
              <i class="icon-list"></i>Want to see it
            </a>
          </li>
          <li>
            <a href="/watched-list">
              <i class="icon-picture"></i>Seen it
            </a>
          </li>
          <li>
            <a href="/suggested">
              <i class="icon-plus"></i>Watch!
            </a>
          </li>
          <li>
            <a href="/not-suggested">
              <i class="icon-minus"></i>Don't watch!
            </a>
          </li>
          <li>
            <a href="/random-movie">
              <i class="icon-question"></i>Random movie
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
