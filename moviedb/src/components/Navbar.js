import React from "react";
import "../style/NavbarStyle.css";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import FlagIcon from "./FlagIcon.js";

export default function Navbar() {
  const [language, setLanguage] = useContext(LanguageContext);

  function isDisabled(buttonLanguage) {
    if (buttonLanguage === language) {
      return true;
    }
    return false;
  }

  return (
    <div className="header">
      <Link to={"/"} id="logo" target="_blank">
        The Movie Database
      </Link>

      <nav>
        <ul>
          <div class="language-button">
            <div
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                setLanguage("en");
              }}
              disabled={isDisabled("en")}
            >
              <FlagIcon code="gb" />
            </div>
          </div>
          <div class="language-button">
            <div
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                setLanguage("hu");
              }}
              disabled={isDisabled("hu")}
            >
              <FlagIcon code="hu" />
            </div>
          </div>
          <li class="menu-item">
            <Link to={"/"}>
              <i class="icon-home"></i>Home
            </Link>
          </li>
          <li>
            <Link to={"/experiences"}>
              <i class="icon-heart"></i>Experiences
            </Link>
          </li>
          <li>
            <Link to={"/watchlist"}>
              <i class="icon-list"></i>My Collection
            </Link>
          </li>
          <li>
            <Link to={"/suggested"}>
              <i class="icon-plus"></i>Suggestions
            </Link>
          </li>
          <li>
            <Link to={"/random-movie"}>
              <i class="icon-question"></i>Random
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
