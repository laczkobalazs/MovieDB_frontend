import React, { useState } from "react";
import Axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const config = {
    headers: {
      Origin: "http://localhost:3000/",
      "Access-Control-Request-Method": "POST, OPTIONS",
      "Access-Control-Request-Headers": "access-control-allow-origin",
    },
  };
  //'X-Requested-With': 'http://localhost:3000/',
  //"http://localhost:8080/auth/sign-in"
  const sendUserLoginData = () => {
    console.log(username + " " + password);
    Axios({
      method: "post",
      url: "http://localhost:8080/auth/sign-in",
      data: { username: username, password: password },
      headers: { "Access-Control-Allow-Origin": "http://localhost:3000/" },
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
