import React, { useRef, useEffect } from "react";
import AuthenticationFormComponent from "../Components/authenticationForm";
import { Link, useHistory } from "react-router-dom";
import {
  SIGN_IN_ACTION_REQUEST,
  signInActionRequest
} from "../Actions/authenticationActions";
import { APPLICATION_NAME } from "../Constants/staticStrings";
import { connect } from "react-redux";
import "../Styles/AuthenticationScreen.css";
import svg from "../../src/Assets/logo.svg";

const SignInPage = props => {
  const didMountRef = useRef(false);
  const history = useHistory();
  const sigIn = (email, password) => {
    let user = {
      Email: email,
      Password: password
    };
    props.signInActionRequest({ payload: user });
  };

  useEffect(() => {
    if (localStorage.token) {
      history.push("/account");
    }
  }, [history]);

  useEffect(() => {
    if (didMountRef.current) {
      if (props.token) {
        history.push("/account");
      }
    } else didMountRef.current = true;
  });

  return (
    <>
      <div className="authenticationHeader">
        <div className="authenticationTopHeader">{APPLICATION_NAME}</div>
        <div className="authenticationLink">
          <Link to="/">Sign up instead</Link>
        </div>
      </div>
      <AuthenticationFormComponent
        type={SIGN_IN_ACTION_REQUEST}
        action={sigIn}
        errorMessage={props.errorMessage}
      />
    </>
  );
};

const mapStateToProps = state => {
  return {
    errorMessage: state.authentication.errorMessage,
    token: state.authentication.token
  };
};

export default connect(mapStateToProps, { signInActionRequest })(SignInPage);
