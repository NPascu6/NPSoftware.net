import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types'; // ES6
import {
  SIGN_IN_BUTTON,
  SIGN_UP_BUTTON,
  SIGNUPSCREEN_HEADER,
  LOGINSCREEN_HEADER,
} from '../Constants/staticStrings';
import {
  SIGN_UP_ACTION_REQUEST,
} from '../Constants/authenticationActionNames';
import '../Styles/AuthenticationForm.css';
import svg from '../Assets/logo.svg';

const AuthenticationFormComponent = ({ action, type, errorMessage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const selectStyle = {
    display: 'none',
  };
  const submit = () => {
    action(email, password);
  };

  return (
    <div className="authenticationContainer">
      <div className="authenticationIcon">
        <img alt="" src={svg} />
      </div>
      <div className="authenticationFormHeader">
        {type === SIGN_UP_ACTION_REQUEST
          ? SIGNUPSCREEN_HEADER
          : LOGINSCREEN_HEADER}
      </div>
      <div className="authenticationRowContainer">
        <label name="email" className="authenticationLabel" htmlFor="emailSelect">
          Email:
          <select label="emailSelect" style={{ display: 'none' }} />
        </label>
        <TextField
          className="authenticationInput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
        />
      </div>
      <div className="authenticationRowContainer">
        <label name="password" className="authenticationLabel" htmlFor="passwordSelect">
          Password:
          <select label="passwordSelect" style={selectStyle} />
        </label>
        <TextField
          className="authenticationInput"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          type="password"
        />
      </div>
      <div>
        <button type="submit" className="authenticationButton" onClick={() => submit()}>
          {type === SIGN_UP_ACTION_REQUEST
            ? SIGN_UP_BUTTON
            : SIGN_IN_BUTTON}
        </button>
      </div>
      <div className="authenticationErrorMessage">{errorMessage}</div>
    </div>
  );
};

AuthenticationFormComponent.propTypes = {
  action: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default AuthenticationFormComponent;
