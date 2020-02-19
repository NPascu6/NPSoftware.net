import React, { useEffect } from "react";
import { connect } from "react-redux";

const AccountPage = props => {
  useEffect(() => {
    if (props.token !== null) {
      localStorage.setItem("token", props.token);
    }
  }, [props, props.token]);

  return <>{localStorage.token && <div>Account Page</div>}</>;
};

const mapStateToProps = state => {
  return {
    token: state.authentication.token
  };
};

export default connect(mapStateToProps)(AccountPage);
