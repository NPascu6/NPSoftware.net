import React, { useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { useCookies } from 'react-cookie';
import PropTypes from 'prop-types'; // ES6
import { addLoader, removeLoader } from '../Actions/utilitiesActions';
import AuthenticationFormComponent from '../Components/authenticationForm';
import {
  signUpActionRequest,
  clearErrorRequest,
} from '../Actions/authenticationActions';
import { SIGN_UP_ACTION_REQUEST } from '../Constants/authenticationActionNames';
import { APPLICATION_NAME } from '../Constants/staticStrings';
import '../Styles/AuthenticationScreen.css';
import LoadingScreen from '../Components/loadingComponent';

const SignUpPage = ({
  // eslint-disable-next-line no-shadow
  loader, addLoader, removeLoader, errorMessage, clearErrorRequest, signUpActionRequest, token,
}) => {
  const history = useHistory();
  const didMountRef = useRef(false);
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(['token']);

  const signUp = (email, password) => {
    addLoader();
    const user = {
      Email: email,
      Password: password,
    };
    signUpActionRequest({ payload: user });
  };

  useEffect(() => {
    if (cookies.token != null) {
      history.push('/account');
    }
  }, [cookies, history]);

  useEffect(() => {
    if (didMountRef.current) {
      if (token != null) {
        removeLoader();
        setCookie('token', token);
        if (token)history.push('/account');
      } else if (errorMessage !== '') {
        removeLoader();
        didMountRef.current = false;
      }
    } else didMountRef.current = true;
  });

  return (
    <>
      {loader ? (
        <LoadingScreen />
      ) : (
        <>
          <div className="authenticationHeader">
            <div className="authenticationTopHeader">{APPLICATION_NAME}</div>
            <div className="authenticationLink" onClick={clearErrorRequest} role="link" onKeyUp={() => null} tabIndex={0}>
              <Link to="/signInPage">Log in instead</Link>
            </div>
          </div>
          <AuthenticationFormComponent
            type={SIGN_UP_ACTION_REQUEST}
            action={signUp}
            errorMessage={errorMessage}
          />
        </>
      )}
    </>
  );
};

SignUpPage.propTypes = {
  token: PropTypes.string,
  loader: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  addLoader: PropTypes.func.isRequired,
  removeLoader: PropTypes.func.isRequired,
  clearErrorRequest: PropTypes.func.isRequired,
  signUpActionRequest: PropTypes.func.isRequired,
};

SignUpPage.defaultProps = {
  token: '',
};

const mapStateToProps = (state) => ({
  errorMessage: state.authentication.errorMessage,
  token: state.authentication.token,
  loader: state.utitlitiesReducer.loader,
});

export default connect(mapStateToProps, {
  signUpActionRequest,
  clearErrorRequest,
  addLoader,
  removeLoader,
})(SignUpPage);
