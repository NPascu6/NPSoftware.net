import React from "react";
import AuthenticationFormComponent from "../Components/authenticationForm";
import { Link } from "react-router-dom";
import { APPLICATION_NAME } from "../Constants/staticStrings";
import {
  SIGN_IN_ACTION_REQUEST,
  signInActionRequest
} from "../Actions/authenticationActions";
import { connect } from "react-redux";

const signInPage = (props, {signInActionRequest}) => {
  return (
    <>
      <div>{APPLICATION_NAME}</div>
      <AuthenticationFormComponent
        type={SIGN_IN_ACTION_REQUEST}
        action={signInActionRequest}
      />
      <Link to="/">Sign up instead</Link>
    </>
  );
};

const mapStateToProps = state => {
  console.log("State:");
  console.log(state);
  // Redux Store --> Component
  return {
    state: state
  };
};

export default connect(mapStateToProps, { signInActionRequest })(signInPage);
