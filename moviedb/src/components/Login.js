import React, { useState, useContext } from "react";
import Axios from "axios";
import { LoggedInContext } from "../context/LoggedInContext";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);

  const sendUserLoginData = () => {
    Axios.post("http://localhost:8080/auth/sign-in", {
      username: username,
      password: password,
    }).then((data) => {
      removeCookies();
      document.cookie = `Authorization=${data.data.token}`;
      localStorage.clear();
      window.localStorage.setItem("username", username);
      setIsLoggedIn(true);
    });
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
      <Link to={"/"}>
        <button onClick={sendUserLoginData}>Log In</button>
      </Link>
    </div>
  );
}

export default Login;
