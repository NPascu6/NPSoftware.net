import React, { useRef, useEffect } from "react";
import AuthenticationFormComponent from "../Components/authenticationForm";
import { Link, useHistory } from "react-router-dom";
import {
  SIGN_UP_ACTION_REQUEST,
  signUpActionRequest
} from "../Actions/authenticationActions";
import { APPLICATION_NAME } from "../Constants/staticStrings";
import { connect } from "react-redux";
import "../Styles/AuthenticationScreen.css";

const SignUpPage = props => {
  const history = useHistory();
  const didMountRef = useRef(false);

  const signUp = (email, password) => {
    let user = {
      Email: email,
      Password: password
    };
    props.signUpActionRequest({ payload: user });
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
      <div class="authenticationTopHeader">{APPLICATION_NAME}</div>
      <div class="authenticationLink">
        <Link to="/signInPage">Log in instead</Link>
      </div>
      <AuthenticationFormComponent
        type={SIGN_UP_ACTION_REQUEST}
        action={signUp}
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

export default connect(mapStateToProps, { signUpActionRequest })(SignUpPage);
