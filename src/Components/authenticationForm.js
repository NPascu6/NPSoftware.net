import React, { useEffect } from "react";
import { SIGN_IN_BUTTON, SIGN_UP_BUTTON } from "../Constants/staticStrings";
import { SIGN_UP_ACTION } from "../Actions/actionTypes";

const AuthenticationFormComponent = ({ type, action }) => {
  useEffect(() => {}, []);

  return (
    <>
      <div>
        <label>Email</label>
        <input></input>
      </div>
      <div>
        <label>Password</label>
        <input></input>
      </div>
      <div>
        <button onClick={action}>
          {type === SIGN_UP_ACTION ? SIGN_UP_BUTTON : SIGN_IN_BUTTON}
        </button>
      </div>
    </>
  );
};

export default AuthenticationFormComponent;
