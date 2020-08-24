import React, { useState } from "react";
import Login from "./Login.js";
import Registration from "./Registration.js";
import Axios from "axios";

function LoginOrRegister() {
  const [loginOrReg, setLoginOrReg] = useState("login");

  return (
    <div>
      <div className="buttonsArea">
        <button
          className="login"
          disabled={loginOrReg === "login"}
          onClick={() => {
            setLoginOrReg("login");
          }}
        >
          Sign in
        </button>

        <button
          className="registration"
          disabled={loginOrReg === "registration"}
          onClick={() => {
            setLoginOrReg("registration");
          }}
        >
          Sign up
        </button>
      </div>
      {loginOrReg === "login" ? <Login /> : <Registration />}
    </div>
  );
}

export default LoginOrRegister;
