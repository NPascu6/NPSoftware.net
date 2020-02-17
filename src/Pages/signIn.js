import React from "react";
import AuthenticationFormComponent from "../Components/authenticationForm";
import { Link } from "react-router-dom";
import { APPLICATION_NAME } from "../Constants/staticStrings";
import { SIGN_IN_ACTION } from "../Actions/actionTypes";
import { connect } from "react-redux";

const signInPage = () => {
  return (
    <>
      <div>{APPLICATION_NAME}</div>
      <AuthenticationFormComponent
        type={SIGN_IN_ACTION}
        action={this.props}
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
// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = dispatch => {
  // Action
  return {
    // Increase Counter
    signIn: () =>
      dispatch({
        type: SIGN_IN_ACTION
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(signInPage);
