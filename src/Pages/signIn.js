import React, { useRef, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { useCookies } from 'react-cookie';
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

const SignInPage = (props) => {
  const didMountRef = useRef(false);
  const history = useHistory();
  const [cookies, setCookie] = useCookies(['token']);

  const sigIn = (email, password) => {
    const user = {
      Email: email,
      Password: password,
    };
    props.signInActionRequest({ payload: user });
    props.addLoader();
  };

  useEffect(() => {
    if (cookies.token != null) {
      history.push('/account');
    }
  }, [cookies, history]);

  useEffect(() => {
    if (didMountRef.current) {
      if (props.token != null) {
        setCookie('token', props.token);
        props.removeLoader();
        props.token && history.push('/account');
      } else if (props.errorMessage !== '') {
        props.removeLoader();
        didMountRef.current = false;
      }
    } else didMountRef.current = true;
  });

  return (
    <>
      <div>
        {props.loader ? (
          <LoadingScreen />
        ) : (
          <>
            <div className="authenticationHeader">
              <div className="authenticationTopHeader">{APPLICATION_NAME}</div>
              <div
                className="authenticationLink"
                onClick={props.clearErrorRequest}
              >
                <Link to="/">Sign up instead</Link>
              </div>
            </div>
            <AuthenticationFormComponent
              type={SIGN_IN_ACTION_REQUEST}
              action={sigIn}
              errorMessage={props.errorMessage}
            />
          </>
        )}
      </div>
    </>
  );
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
