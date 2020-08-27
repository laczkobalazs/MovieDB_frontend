import React, { useState, useContext } from "react";
import Axios from "axios";
import { LoggedInContext } from "../context/LoggedInContext";
import { Link } from "react-router-dom";
import "../style/Login.scss";

function Registration(props) {
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
      })
        .then((data) => {
          removeCookies();
          document.cookie = `Authorization=${data.data.token}`;
          localStorage.clear();
          window.localStorage.setItem("username", userName);
          setIsLoggedIn(true);
          props.history.push("/");
        })
        .catch((e) => {
          alert("Username and/or email address taken!");
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

  const togglePasswordVisibility = () => {
    let passwordInput = document.getElementById("password");
    let passwordInput2 = document.getElementById("password2");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordInput2.type = "text";
    } else {
      passwordInput.type = "password";
      passwordInput2.type = "password";
    }
  };

  return (
    <div>
      <div id="login">
        <div class="login-card">
          <div class="card-title">
            <h1>Please Register</h1>
          </div>

          <div class="content">
            <input
              id="email"
              type="text"
              name="email"
              title="email"
              placeholder="Username"
              required
              autofocus
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              id="email"
              type="text"
              name="email"
              title="email"
              placeholder="Email"
              required
              autofocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              id="password"
              type="password"
              name="password"
              title="password"
              placeholder="Password"
              required
              onChange={(e) => setFirstPassword(e.target.value)}
            />
            <input
              className="password"
              id="password2"
              type="password"
              name="password"
              title="password"
              placeholder="Password again"
              required
              onChange={(e) => setSecondPassword(e.target.value)}
            />

            <div class="level options">
              <div class="checkbox level-left">
                <input
                  type="checkbox"
                  id="checkbox"
                  class="regular-checkbox"
                  onClick={togglePasswordVisibility}
                />
                <label for="checkbox"></label>
                <span>Show password</span>
              </div>
            </div>

            <button
              type="submit"
              class="btn btn-primary"
              onClick={sendNewUserData}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;

{
  /*   <div>
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
    </div>*/
}
