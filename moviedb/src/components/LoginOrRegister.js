import React, { useState } from "react";
import Login from "./Login.js";
import Registration from "./Registration.js";
import Axios from "axios";
import "../style/Login.scss";

function LoginOrRegister(props) {
  const [loginOrReg, setLoginOrReg] = useState("login");

  return (
    <div>
      <div className="buttonsArea">
        {loginOrReg === "registration" ? (
          <a
            href="#"
            className="register-login"
            onClick={() => {
              setLoginOrReg("login");
            }}
          >
            Have an account? Sign in!
          </a>
        ) : (
          <a
            href="#"
            className="register-login"
            onClick={() => {
              setLoginOrReg("registration");
            }}
          >
            Not signed up? Register!
          </a>
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
