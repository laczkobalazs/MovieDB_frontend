import React, { useState, useContext } from "react";
import Axios from "axios";
import { LoggedInContext } from "../context/LoggedInContext";

function Registration() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);
  const [cookieValue, setCookieValue] = useState(document.cookie.split("=")[1]);

  const sendNewUserData = () => {
    if (firstPassword !== secondPassword) {
      alert("Passwords are not equal!");
    } else {
      Axios.post("http://localhost:8080/auth/registration", {
        username: userName,
        email: email,
        password: firstPassword,
      })
        .then((data) => {
          document.cookie =
            "Authorization=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          setCookieValue(document.cookie);
          document.cookie = `Authorization=${data.data.token}`;
          setCookieValue(`Authorization=${data.data.token}`);
          localStorage.removeItem("username");
          localStorage.removeItem("roles");
          window.localStorage.setItem("username", userName);
          window.localStorage.setItem("roles", data.data.roles);
          setIsLoggedIn(true);
          window.location.replace("/");
        })
        .catch((e) => {
          alert("Incorrect username or password");
        });
    }
  };
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
      <button onClick={sendNewUserData}>Submit</button>
    </div>
  );
}

export default Registration;
