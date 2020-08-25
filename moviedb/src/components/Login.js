import React, { useState } from "react";
import Axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const sendUserLoginData = () => {
    Axios.post("http://localhost:8080/auth/sign-in", {
      username: username,
      password: password,
    }).then((data) => {
      document.cookie = `Authorization=${data.data.token}`;
      localStorage.clear();
      window.localStorage.setItem("username", username);
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
