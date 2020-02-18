import React, { useState } from "react";
import { SIGN_IN_BUTTON, SIGN_UP_BUTTON } from "../Constants/staticStrings";
import { SIGN_UP_ACTION_REQUEST } from "../Actions/authenticationActions";

const AuthenticationFormComponent = ({ type, action }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    action(email, password);
  };

  return (
    <>
      <div>
        <label>Email</label>
        <input
          value={email}
          name="email"
          onChange={e => setEmail(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          name="password"
        ></input>
      </div>
      <div>
        <button onClick={() => submit()}>
          {type === SIGN_UP_ACTION_REQUEST ? SIGN_UP_BUTTON : SIGN_IN_BUTTON}
        </button>
      </div>
    </>
  );
};

export default AuthenticationFormComponent;
