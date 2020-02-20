import React, { useState } from "react";
import {
  SIGN_IN_BUTTON,
  SIGN_UP_BUTTON,
  SIGNUPSCREEN_HEADER,
  LOGINSCREEN_HEADER
} from "../Constants/staticStrings";
import { SIGN_UP_ACTION_REQUEST } from "../Actions/authenticationActions";
import "../Styles/AuthenticationForm.css";

const AuthenticationFormComponent = ({ type, action, errorMessage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    action(email, password);
  };

  return (
    <div class="authenticationContainer">
      <div class="authenticationHeader">
        {type === SIGN_UP_ACTION_REQUEST
          ? SIGNUPSCREEN_HEADER
          : LOGINSCREEN_HEADER}
      </div>
      <div class="authenticationRowContainer">
        <label class="authenticationLabel">Email:</label>
        <input
          class="authenticationInput"
          value={email}
          name="email"
          onChange={e => setEmail(e.target.value)}
        ></input>
      </div>
      <div class="authenticationRowContainer">
        <label class="authenticationLabel">Password:</label>
        <input
          class="authenticationInput"
          value={password}
          onChange={e => setPassword(e.target.value)}
          name="password"
        ></input>
      </div>
      <div>
        <button class="authenticationButton" onClick={() => submit()}>
          {type === SIGN_UP_ACTION_REQUEST ? SIGN_UP_BUTTON : SIGN_IN_BUTTON}
        </button>
      </div>
      <div class="authenticationErrorMessage">{errorMessage}</div>
    </div>
  );
};

export default AuthenticationFormComponent;
