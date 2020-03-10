import React, { useRef, useEffect } from "react";
import AuthenticationFormComponent from "../Components/authenticationForm";
import { Link, useHistory } from "react-router-dom";
import {
  signInActionRequest,
  clearErrorRequest
} from "../Actions/authenticationActions";
import { SIGN_IN_ACTION_REQUEST } from "../Constants/authenticationActionNames";
import { APPLICATION_NAME } from "../Constants/staticStrings";
import { connect } from "react-redux";
import "../Styles/AuthenticationScreen.css";
import { useCookies } from "react-cookie";

const SignInPage = props => {
  const didMountRef = useRef(false);
  const history = useHistory();
  const [cookies, setCookie] = useCookies(["token"]);

  const sigIn = (email, password) => {
    let user = {
      Email: email,
      Password: password
    };
    props.signInActionRequest({ payload: user });
  };

  useEffect(() => {
    if (cookies.token != null) {
      history.push("/account");
    }
  }, [cookies, history, props.token]);

  useEffect(() => {
    //console.log(cookies);
    if (didMountRef.current) {
      if (props.token) {
        setCookie("token", props.token);
        history.push("/account");
      }
    } else didMountRef.current = true;
  });

  return (
    <>
      <div className="authenticationHeader">
        <div className="authenticationTopHeader">{APPLICATION_NAME}</div>
        <div className="authenticationLink" onClick={props.clearErrorRequest}>
          <Link to="/">Sign up instead</Link>
        </div>
      </div>
      <AuthenticationFormComponent
        type={SIGN_IN_ACTION_REQUEST}
        action={sigIn}
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
  signInActionRequest,
  clearErrorRequest
})(SignInPage);
