import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import LogOutButton from "../Components/logoutButton";
import { setTokenActionRequest } from "../Actions/authenticationActions";

const AccountPage = props => {
  const history = useHistory();

  useEffect(() => {
    debugger;
    let token = localStorage.getItem("token");
    if (token !== null && props.token === null) {
      props.setTokenActionRequest(token);
    } else if (token === null && props.token !== null) {
      localStorage.setItem("token", props.token);
    } else if (token !== null && props.token !== null) {
      return;
    } else {
      history.push("/");
    }
  }, [history, props, props.token]);

  return (
    <>
      <div>Account Page</div>
      <div>Coming soon</div>
      <LogOutButton />
    </>
  );
};

const mapStateToProps = state => {
  return {
    token: state.authentication.token
  };
};

export default connect(mapStateToProps, { setTokenActionRequest })(AccountPage);
