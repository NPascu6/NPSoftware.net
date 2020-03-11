import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getUserDetailsRequest,
  addUserDetailsRequest
} from "../Actions/userManagementActions";

import { useCookies } from "react-cookie";
import AccountDetails from "../Components/accountDetails";
import LogOutButton from "../Components/logoutButton";

const AccountPage = props => {
  const history = useHistory();
  const [cookies, setCookie] = useCookies(["token"]);
  const [accountDetails, setAccountDetails] = useState({});
  const didMountRef = useRef(false);
  useEffect(() => {
    let token = cookies.token;
    if (token == null) {
      history.push("/");
    }
  }, [cookies.token, history, props]);

  useEffect(() => {
    debugger;
    props.getUserDetailsRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (didMountRef.current) {
      if (props.accountDetails) {
        setAccountDetails(props.accountDetails);
      }
    } else didMountRef.current = true;
  }, [props.accountDetails, history]);

  const save = user => {
    props.addUserDetailsRequest({ payload: user });
  };
  return (
    <>
      <AccountDetails accountDetails={accountDetails} action={save} />
      <LogOutButton />
    </>
  );
};

const mapStateToProps = state => {
  return {
    accountDetails: state.userManagement.user
  };
};

export default connect(mapStateToProps, {
  getUserDetailsRequest,
  addUserDetailsRequest
})(AccountPage);
