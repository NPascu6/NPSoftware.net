import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getUserDetailsRequest,
  addUserDetailsRequest
} from "../Actions/userManagementActions";
import { addLoader, removeLoader } from "../Actions/utilitiesActions";
import { useCookies } from "react-cookie";
import AccountDetails from "../Components/accountDetails";
import LogOutButton from "../Components/logoutButton";
import LoadingScreen from "../Components/loadingComponent";

const AccountPage = props => {
  const history = useHistory();
  const [cookies, setCookie] = useCookies(["token"]);
  const [accountDetails, setAccountDetails] = useState({});
  const didMountRef = useRef(false);

  useEffect(() => {
    debugger;
    let token = cookies.token;
    if (token == null) {
      history.push("/");
    }
    if (props.added) {
      props.removeLoader();
    }
  }, [cookies.token, history, props]);

  useEffect(() => {
    props.getUserDetailsRequest();
    props.addLoader();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    debugger;
    if (didMountRef.current) {
      if (props.accountDetails) {
        setAccountDetails(props.accountDetails);
        props.removeLoader();
      }
    } else didMountRef.current = true;
  }, [props.accountDetails]);

  const save = user => {
    props.addUserDetailsRequest({ payload: user });
    props.addLoader();
  };

  return (
    <>
      {props.loader ? (
        <LoadingScreen />
      ) : (
        <>
          <AccountDetails accountDetails={accountDetails} action={save} />
          <LogOutButton />
        </>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    accountDetails: state.userManagement.user,
    added: state.userManagement.added,
    loader: state.utitlitiesReducer.loader
  };
};

export default connect(mapStateToProps, {
  getUserDetailsRequest,
  addUserDetailsRequest,
  addLoader,
  removeLoader
})(AccountPage);
