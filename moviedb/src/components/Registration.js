import React, { useState, useContext } from "react";
import Axios from "axios";
import { LoggedInContext } from "../context/LoggedInContext";
import { Link } from "react-router-dom";

function Registration() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);

  const sendNewUserData = () => {
    if (firstPassword !== secondPassword) {
      alert("Passwords are not equal!");
    } else {
      Axios.post("http://localhost:8080/auth/registration", {
        username: userName,
        email: email,
        password: firstPassword,
      }).then((data) => {
        removeCookies();
        document.cookie = `Authorization=${data.data.token}`;
        localStorage.clear();
        window.localStorage.setItem("username", userName);
        setIsLoggedIn(true);
      });
    }
  };

  function removeCookies() {
    var res = document.cookie;
    var multiple = res.split(";");
    for (var i = 0; i < multiple.length; i++) {
      var key = multiple[i].split("=");
      document.cookie = key[0] + " =; expires = Thu, 01 Jan 1970 00:00:00 UTC";
    }
  }
  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="Your name, beauty"
        autoComplete="off"
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail, where we can send nudes"
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="off"
      />
      <input
        type="password"
        name="firstPassword"
        placeholder="Your super-secure password"
        onChange={(e) => setFirstPassword(e.target.value)}
      />
      <input
        type="password"
        name="secondPassword"
        placeholder="Once again"
        onChange={(e) => setSecondPassword(e.target.value)}
      />
      <Link to={"/"}>
        <button onClick={sendNewUserData}>Submit</button>
      </Link>
    </div>
  );
}

export default Registration;
