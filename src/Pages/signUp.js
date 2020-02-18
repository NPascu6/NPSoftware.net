import React from "react";
import AuthenticationFormComponent from "../Components/authenticationForm";
import { Link } from "react-router-dom";
import {
  SIGN_UP_ACTION_REQUEST,
  signUpActionRequest
} from "../Actions/authenticationActions";
import { APPLICATION_NAME } from "../Constants/staticStrings";
import { connect } from "react-redux";

const signUpPage = (props) => {
  console.log(props)
  const signUp = (email, password) => {
    debugger;
    let user = {
      Email: email,
      Password: password
    };
    props.signUpActionRequest({ payload: user });
  };
  return (
    <>
      <div>{APPLICATION_NAME}</div>
      <AuthenticationFormComponent
        type={SIGN_UP_ACTION_REQUEST}
        action={signUp}
      />
      <Link to="/signInPage">Log in instead</Link>
      <div>{props.errorMessage}</div>
    </>
  );
};

const mapStateToProps = state => {
  console.log("State:");
  console.log(state);
  // Redux Store --> Component
  return {
    errorMessage: state.errorMessage
  };
};

export default connect(mapStateToProps, { signUpActionRequest })(signUpPage);
