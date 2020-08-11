import React from "react";
import "../style/NavbarStyle.css";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [language, setLanguage] = useContext(LanguageContext);
  return (
    <div className="header">
      <Link to={"/"} id="logo" target="_blank">
        The Movie Database
      </Link>
      <button
        onClick={() => {
          switch (language) {
            case "en":
              setLanguage("hu");
              break;
            case "hu":
              setLanguage("en");
              break;
            default:
              setLanguage("en");
          }
        }}
      >
        {language === "hu" ? "English" : "Magyar"}
      </button>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>
              <i class="icon-home"></i>Home
            </Link>
          </li>
          <li>
            <Link to={"/experiences"}>
              <i class="icon-heart"></i>My collection
            </Link>
          </li>
          <li>
            <Link to={"/watchlist"}>
              <i class="icon-list"></i>Want to see it
            </Link>
          </li>
          <li>
            <Link to={"/watched-list"}>
              <i class="icon-picture"></i>Seen it
            </Link>
          </li>
          <li>
            <Link to={"/suggested"}>
              <i class="icon-plus"></i>Watch!
            </Link>
          </li>
          <li>
            <Link to={"/not-suggested"}>
              <i class="icon-minus"></i>Don't watch!
            </Link>
          </li>
          <li>
            <Link to={"/random-movie"}>
              <i class="icon-question"></i>Random movie
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
