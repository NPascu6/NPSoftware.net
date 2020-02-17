import React from "react";
import AuthenticationFormComponent from "../Components/authenticationForm";
import { Link } from "react-router-dom";
import { SIGN_UP_ACTION } from "../Actions/actionTypes";
import { APPLICATION_NAME } from "../Constants/staticStrings";
import { connect } from "react-redux";

const signUpPage = (props) => {
  return (
    <>
      <div>{APPLICATION_NAME}</div>
      <AuthenticationFormComponent
        type={SIGN_UP_ACTION}
        action={this.props.signUp}
      />
      <Link to="/signInPage">Log in instead</Link>
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
    signUp: () =>
      dispatch({
        type: SIGN_UP_ACTION
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(signUpPage);
