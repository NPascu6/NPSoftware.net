import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import {
  SIGN_IN_BUTTON,
  SIGN_UP_BUTTON,
  SIGNUPSCREEN_HEADER,
  LOGINSCREEN_HEADER
} from "../Constants/staticStrings";
import { SIGN_UP_ACTION_REQUEST } from "../Actions/authenticationActions";
import "../Styles/AuthenticationForm.css";
import svg from "../../src/Assets/logo.svg";

const AuthenticationFormComponent = ({ type, action, errorMessage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    action(email, password);
  };

  return (
    <div className="authenticationContainer">
      <div className="authenticationIcon">
        <img alt="" src={svg} />
      </div>
      <div className="authenticationFormHeader">
        {type === SIGN_UP_ACTION_REQUEST
          ? SIGNUPSCREEN_HEADER
          : LOGINSCREEN_HEADER}
      </div>
      <div className="authenticationRowContainer">
        <label className="authenticationLabel">Email:</label>
        <TextField
          className="authenticationInput"
          value={email}
          onChange={e => setEmail(e.target.value)}
          name="email"
          type="email"
        />
      </div>
      <div className="authenticationRowContainer">
        <label className="authenticationLabel">Password:</label>
        <TextField
          className="authenticationInput"
          value={password}
          onChange={e => setPassword(e.target.value)}
          name="password"
          type="password"
        />
      </div>
      <div>
        <button className="authenticationButton" onClick={() => submit()}>
          {type === SIGN_UP_ACTION_REQUEST ? SIGN_UP_BUTTON : SIGN_IN_BUTTON}
        </button>
      </div>
      <div className="authenticationErrorMessage">{errorMessage}</div>
    </div>
  );
};

export default AuthenticationFormComponent;
