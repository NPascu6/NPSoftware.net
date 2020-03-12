import React, { useRef, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { useCookies } from 'react-cookie';
import PropTypes from 'prop-types'; // ES6
import AuthenticationFormComponent from '../Components/authenticationForm';
import {
  signInActionRequest,
  clearErrorRequest,
} from '../Actions/authenticationActions';
import { addLoader, removeLoader } from '../Actions/utilitiesActions';
import { SIGN_IN_ACTION_REQUEST } from '../Constants/authenticationActionNames';
import { APPLICATION_NAME } from '../Constants/staticStrings';
import '../Styles/AuthenticationScreen.css';
import LoadingScreen from '../Components/loadingComponent';

const SignInPage = ({
  // eslint-disable-next-line no-shadow
  addLoader, removeLoader, signInActionRequest, token, errorMessage, loader, clearErrorRequest,
}) => {
  const didMountRef = useRef(false);
  const history = useHistory();
  const [cookies, setCookie] = useCookies(['token']);

  const sigIn = (email, password) => {
    addLoader();
    const user = {
      Email: email,
      Password: password,
    };
    signInActionRequest({ payload: user });
  };

  useEffect(() => {
    if (cookies.token != null) {
      history.push('/account');
    }
  }, [cookies, history]);

  useEffect(() => {
    if (didMountRef.current) {
      if (token != null) {
        setCookie('token', token);
        removeLoader();
        token && history.push('/account');
      } if (errorMessage !== '') {
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
            <div
              className="authenticationLink"
              onClick={clearErrorRequest}
              onKeyUp={() => null}
              role="button"
              tabIndex="0"
            >
              <Link to="/">Sign up instead</Link>
            </div>
          </div>
          <AuthenticationFormComponent
            type={SIGN_IN_ACTION_REQUEST}
            action={sigIn}
            errorMessage={errorMessage}
          />
        </>
      )}
    </>
  );
};

SignInPage.propTypes = {
  token: PropTypes.string,
  loader: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  addLoader: PropTypes.func.isRequired,
  removeLoader: PropTypes.func.isRequired,
  clearErrorRequest: PropTypes.func.isRequired,
  signInActionRequest: PropTypes.func.isRequired,
};

SignInPage.defaultProps = {
  token: '',
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    errorMessage: state.authentication.errorMessage,
    token: state.authentication.token,
    loader: state.utitlitiesReducer.loader,
  };
};

export default connect(mapStateToProps, {
  signInActionRequest,
  clearErrorRequest,
  addLoader,
  removeLoader,
})(SignInPage);
