import React, { useState } from "react";
import Axios from "axios";

function Registration() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");

  const sendNewUserData = () => {
    if (firstPassword !== secondPassword) {
      alert("Passwords are not equal!");
    } else {
      Axios.post("http://localhost:8080/auth/registration", {
        username: userName,
        email: email,
        password: firstPassword,
      }).then((data) => {
        document.cookie = `Authorization=${data.data.token}`;
        localStorage.clear();
        window.localStorage.setItem("username", userName);
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
