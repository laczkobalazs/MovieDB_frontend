import React, { useState, useContext } from "react";
import Axios from "axios";
import { LoggedInContext } from "../context/LoggedInContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);
  const [cookieValue, setCookieValue] = useState(document.cookie.split("=")[1]);

  const sendUserLoginData = () => {
    Axios.post("http://localhost:8080/auth/sign-in", {
      username: username,
      password: password,
    })
      .then((data) => {
        document.cookie =
          "Authorization=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setCookieValue(document.cookie);
        document.cookie = `Authorization=${data.data.token}`;
        setCookieValue(`Authorization=${data.data.token}`);
        localStorage.removeItem("username");
        localStorage.removeItem("roles");
        window.localStorage.setItem("username", username);
        window.localStorage.setItem("roles", data.data.roles);
        setIsLoggedIn(true);
        window.location.replace("/");
      })
      .catch((e) => {
        alert("Incorrect username or password");
      });
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        autoComplete="off"
      ></input>
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={sendUserLoginData}>Log In</button>
    </div>
  );
}

export default Login;
