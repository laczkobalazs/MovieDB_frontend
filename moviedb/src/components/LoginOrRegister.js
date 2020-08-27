import React, { useState } from "react";
import Login from "./Login.js";
import Registration from "./Registration.js";
import Axios from "axios";

function LoginOrRegister(props) {
  const [loginOrReg, setLoginOrReg] = useState("login");

  return (
    <div>
      <div className="buttonsArea">
        {loginOrReg === "registration" ? (
          <button
            className="login"
            disabled={loginOrReg === "login"}
            onClick={() => {
              setLoginOrReg("login");
            }}
          >
            Sign in
          </button>
        ) : (
          <button
            className="registration"
            disabled={loginOrReg === "registration"}
            onClick={() => {
              setLoginOrReg("registration");
            }}
          >
            Register
          </button>
        )}
      </div>
      {loginOrReg === "login" ? (
        <Login history={props.history} />
      ) : (
        <Registration history={props.history} />
      )}
    </div>
  );
}

export default LoginOrRegister;

{
  /* <a className="btn btn-link level-right" href="#">
                Not signed up? Register!
              </a> */
}
