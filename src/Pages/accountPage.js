import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import PropTypes from 'prop-types'; // ES6
import {
  getUserDetailsRequest,
  addUserDetailsRequest,
} from '../Actions/userManagementActions';
import { addLoader, removeLoader } from '../Actions/utilitiesActions';
import AccountDetails from '../Components/accountDetails';
import LogOutButton from '../Components/logoutButton';
import LoadingScreen from '../Components/loadingComponent';
import '../Styles/AuthenticationForm.css';

const AccountPage = ({

  // eslint-disable-next-line no-shadow
  added, loader, accountDetails, addLoader, removeLoader, getUserDetailsRequest, addUserDetailsRequest,
}) => {
  const history = useHistory();
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(['token']);
  // eslint-disable-next-line no-unused-vars
  const [details, setDetails] = useState({});
  const didMountRef = useRef(false);

  useEffect(() => {
    const { token } = cookies;
    if (token == null) {
      history.push('/');
    }
    if (added) {
      removeLoader();
    }
  }, [added, cookies, history, removeLoader]);

  useEffect(() => {
    getUserDetailsRequest();
    addLoader();
  }, [getUserDetailsRequest, addLoader]);

  useEffect(() => {
    if (didMountRef.current) {
      if (accountDetails) {
        setDetails(accountDetails);
        removeLoader();
      }
    } else didMountRef.current = true;
  }, [accountDetails, setDetails, removeLoader]);

  const save = (user) => {
    addUserDetailsRequest({ payload: user });
    addLoader();
  };

  return (
    <>
      <div className="authenticationContainer">

        <div className="authenticationFormHeader">Account</div>
        {loader ? (
          <LoadingScreen />
        ) : (
          <>
            <AccountDetails accountDetails={accountDetails} action={save} />
            <LogOutButton />
          </>
        )}
      </div>

    </>
  );
};

AccountPage.propTypes = {
  added: PropTypes.bool.isRequired,
  loader: PropTypes.bool.isRequired,
  addLoader: PropTypes.func.isRequired,
  removeLoader: PropTypes.func.isRequired,
  addUserDetailsRequest: PropTypes.func.isRequired,
  getUserDetailsRequest: PropTypes.func.isRequired,
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
