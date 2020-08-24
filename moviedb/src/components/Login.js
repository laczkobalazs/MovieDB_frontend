import React, { useState } from "react";
import Axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const sendUserLoginData = () => {
    console.log(username + " " + password);
    Axios.post("http://localhost:8080/auth/sign-in", {
      username: username,
      password: password,
    }).then((data) => {
      console.log(data.data);
      document.cookie(`Authorization=Bearer ${data.data.token}`);
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
