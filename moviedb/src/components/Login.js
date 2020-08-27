import React, { useState, useContext } from "react";
import Axios from "axios";
import { LoggedInContext } from "../context/LoggedInContext";
import { Link, Redirect } from "react-router-dom";
import "../style/Login.scss";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);

  const sendUserLoginData = () => {
    Axios.post("http://localhost:8080/auth/sign-in", {
      username: username,
      password: password,
    })
      .then((data) => {
        removeCookies();
        document.cookie = `Authorization=${data.data.token}`;
        localStorage.clear();
        window.localStorage.setItem("username", username);
        window.localStorage.setItem("roles", data.data.roles);
        setIsLoggedIn(true);
        props.history.push("/");
      })
      .catch((e) => {
        alert("Incorrect username and/or password!!");
      });
  };

  const togglePasswordVisibility = () => {
    let passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
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
      <div id="login">
        <div className="login-card">
          <div className="card-title">
            <h1>Please Sign In</h1>
          </div>

          <div className="content">
            <input
              id="email"
              type="text"
              name="email"
              title="email"
              placeholder="Username"
              required
              autofocus
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              id="password"
              type="password"
              name="password"
              title="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="level options">
              <div className="checkbox level-left">
                <input
                  type="checkbox"
                  id="checkbox"
                  className="regular-checkbox"
                  onClick={togglePasswordVisibility}
                />
                <label for="checkbox"></label>
                <span>Show password</span>
              </div>
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              onClick={sendUserLoginData}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
