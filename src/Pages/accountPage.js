import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import LogOutButton from "../Components/logoutButton";
import { setTokenActionRequest } from "../Actions/authenticationActions";
import { useCookies } from "react-cookie";
import AccountDetails from "../Components/accountDetails";

const AccountPage = props => {
  const history = useHistory();
  const [cookies, setCookie] = useCookies(["token"]);

  useEffect(() => {
    
    let token = cookies.token;
    if (token == null) {
      history.push("/");
    }
  }, [cookies.token, history, props, props.token, setCookie]);

  return (
    <>
      <div>Account Page</div>
      <div>Coming soon</div>
      <AccountDetails/>
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
