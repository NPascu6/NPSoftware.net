import React, { useRef, useEffect } from "react";
import AuthenticationFormComponent from "../Components/authenticationForm";
import { Link, useHistory } from "react-router-dom";
import {
  signUpActionRequest,
  clearErrorRequest
} from "../Actions/authenticationActions";
import { SIGN_UP_ACTION_REQUEST } from "../Constants/authenticationActionNames";
import { APPLICATION_NAME } from "../Constants/staticStrings";
import { connect } from "react-redux";
import "../Styles/AuthenticationScreen.css";
import { useCookies } from "react-cookie";

const SignUpPage = props => {
  const history = useHistory();
  const didMountRef = useRef(false);
  const [cookies, setCookie] = useCookies(["token"]);

  const signUp = (email, password) => {
    let user = {
      Email: email,
      Password: password
    };
    props.signUpActionRequest({ payload: user });
  };

  useEffect(() => {
    console.log(cookies.token)
    if (cookies.token != null) {
      history.push("/account");
    }
  }, [cookies, cookies.token, history, props.token]);

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

const mapStateToProps = state => {
  return {
    errorMessage: state.authentication.errorMessage,
    token: state.authentication.token
  };
};

export default connect(mapStateToProps, {
  signUpActionRequest,
  clearErrorRequest
})(SignUpPage);
