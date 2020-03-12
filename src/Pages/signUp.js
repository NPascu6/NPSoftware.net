import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import AuthenticationFormComponent from '../Components/authenticationForm';
import {
  signUpActionRequest,
  clearErrorRequest,
} from '../Actions/authenticationActions';
import { SIGN_UP_ACTION_REQUEST } from '../Constants/authenticationActionNames';
import { APPLICATION_NAME } from '../Constants/staticStrings';
import '../Styles/AuthenticationScreen.css';
import { useCookies } from 'react-cookie';

const SignUpPage = (props) => {
  const history = useHistory();
  const [cookies, setCookie] = useCookies(['token']);

  const signUp = (email, password) => {
    const user = {
      Email: email,
      Password: password,
    };
    props.signUpActionRequest({ payload: user });
  };

  useEffect(() => {
    if (cookies.token != null) {
      history.push('/account');
    }
  }, [cookies, cookies.token, history]);

  return (
    <>
      <div className="authenticationHeader">
        <div className="authenticationTopHeader">{APPLICATION_NAME}</div>
        <div className="authenticationLink" onClick={props.clearErrorRequest}>
          <Link to="/signInPage">Log in instead</Link>
        </div>
      </div>
      <AuthenticationFormComponent
        type={SIGN_UP_ACTION_REQUEST}
        action={signUp}
        errorMessage={props.errorMessage}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  errorMessage: state.authentication.errorMessage,
  token: state.authentication.token,
});

export default connect(mapStateToProps, {
  signUpActionRequest,
  clearErrorRequest,
})(SignUpPage);
