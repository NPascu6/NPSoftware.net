import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import {
  getUserDetailsRequest,
  addUserDetailsRequest,
} from '../Actions/userManagementActions';
import { addLoader, removeLoader } from '../Actions/utilitiesActions';
import AccountDetails from '../Components/accountDetails';
import LogOutButton from '../Components/logoutButton';
import LoadingScreen from '../Components/loadingComponent';

const AccountPage = (props) => {
  const history = useHistory();
  const [cookies, setCookie] = useCookies(['token']);
  const [accountDetails, setAccountDetails] = useState({});
  const didMountRef = useRef(false);

  useEffect(() => {
    const { token } = cookies;
    if (token == null) {
      history.push('/');
    }
    debugger;
    if (props.added) {
      debugger;
      props.removeLoader();
    }
  }, [cookies.token, history, props.added]);

  useEffect(() => {
    props.getUserDetailsRequest();
    props.addLoader();
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

  const save = (user) => {
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

const mapStateToProps = (state) => ({
  accountDetails: state.userManagement.user,
  added: state.userManagement.added,
  loader: state.utitlitiesReducer.loader,
});

export default connect(mapStateToProps, {
  getUserDetailsRequest,
  addUserDetailsRequest,
  addLoader,
  removeLoader,
})(AccountPage);
