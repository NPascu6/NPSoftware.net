import React from "react";
import { logOutActionRequest } from "../Actions/authenticationActions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const LogOutButton = props => {
  const history = useHistory();
  const logOut = () => {
    props.logOutActionRequest();
    localStorage.clear()
    history.push("/");
  };

  return (
    <>
      <button onClick={logOut}>Log out</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    errorMessage: state.authentication.errorMessage,
    token: state.authentication.token
  };
};

export default connect(mapStateToProps, { logOutActionRequest })(LogOutButton);
