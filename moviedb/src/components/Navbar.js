import React from "react";
import "../style/NavbarStyle.css";
import { LanguageContext } from "../context/LanguageContext";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import FlagIcon from "./FlagIcon.js";
import { LoggedInContext } from "../context/LoggedInContext";

export default function Navbar() {
  const [language, setLanguage] = useContext(LanguageContext);
  const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);
  const [cookieValue, setCookieValue] = useState(document.cookie.split("=")[1]);

  function isDisabled(buttonLanguage) {
    if (buttonLanguage === language) {
      return true;
    }
    return false;
  }

  useEffect(() => {
    if (isLoggedIn) {
      setCookieValue(document.cookie.split("=")[1]);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    Axios.get("http://localhost:8080/auth-checker", {
      withCredentials: true,
      headers: { Authorization: cookieValue },
    }).then((res) => {
      if (res.data) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookieValue]);

  function logout() {
    removeCookies();
    setIsLoggedIn(false);
    localStorage.removeItem("username");
    localStorage.removeItem("roles");
  }

  function removeCookies() {
    document.cookie =
      "Authorization=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // var res = document.cookie;
    // var multiple = res.split(";");
    // for (var i = 0; i < multiple.length; i++) {
    //   var key = multiple[i].split("=");
    //   document.cookie = key[0] + " =; expires = Thu, 01 Jan 1970 00:00:00 UTC";
    // }
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
          {isLoggedIn ? (
            <li>
              <Link to={"/experiences"}>
                <i class="icon-heart"></i>Experiences
              </Link>
            </li>
          ) : null}
          {isLoggedIn ? (
            <li>
              <Link to={"/watchlist"}>
                <i class="icon-list"></i>Watch List
              </Link>
            </li>
          ) : null}
          {isLoggedIn ? (
            <li>
              <Link to={"/suggested"}>
                <i class="icon-plus"></i>Suggestions
              </Link>
            </li>
          ) : null}
          <li>
            <Link to={"/random-movie"}>
              <i class="icon-question"></i>Random
            </Link>
          </li>
          {isLoggedIn &&
          localStorage.getItem("roles") &&
          localStorage.getItem("roles").includes("ROLE_ADMIN") ? (
            <li>
              <Link to={"/users"}>
                <i class="icon-bookmark"></i>Users
              </Link>
            </li>
          ) : null}
          {isLoggedIn ? (
            <li>
              <Link onClick={() => logout()} to={"/"}>
                Log out
              </Link>
            </li>
          ) : (
            <li>
              <Link to={"/login-register"}>Login|Register</Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
