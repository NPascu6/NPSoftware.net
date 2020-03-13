import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import '../Styles/AuthenticationForm.css';
import PropTypes from 'prop-types'; // ES6

const AccountDetails = ({
  accountDetails, errorMessage, action,
}) => {
  const [email, setEmail] = useState('');
  const [addres, setAddres] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userName, setUserName] = useState('');
  const displayNone = {
    display: 'none',
  };
  const submit = () => {
    const newDetails = {
      email,
      addres,
      phoneNumber,
      userName,
    };
    action(newDetails);
  };

  useEffect(() => {
    setAddres(accountDetails.addres);
    setEmail(accountDetails.email);
    setPhoneNumber(accountDetails.phoneNumber);
    setUserName(accountDetails.userName);
  }, [accountDetails.addres,
    accountDetails.email,
    accountDetails.phoneNumber,
    accountDetails.userName]);

  return (
    <>
      <div className="authenticationIcon">{}</div>
      <div className="authenticationRowContainer">
        <label className="authenticationLabel" style={displayNone} htmlFor="authLabel">
          Email:
          <select label="authLabel" />
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
        <label className="authenticationLabel" htmlFor="addresLabel" style={displayNone}>
          addres:
          {' '}
          <select label="addresLabel" />
        </label>
        <TextField
          value={addres}
          onChange={(e) => setAddres(e.target.value)}
          name="address"
        />
      </div>
      <div className="authenticationRowContainer">
        <label className="authenticationLabel" htmlFor="phoneNumbLabel" style={displayNone}>
          Phone Number:
          {' '}
          <select label="phoneNumbLabel" />
        </label>
        <TextField
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          name="phoneNumber"
          type="phoneNumber"
        />
      </div>
      <div className="authenticationRowContainer">
        <label className="authenticationLabel" htmlFor="userNameLabel" style={displayNone}>
          User Name:
          <select label="userNameLabel" />
        </label>
        <TextField
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          name="userName"
        />
      </div>
      <div>
        <button type="submit" className="authenticationButton" onClick={submit}>
          Save
        </button>
      </div>
      <div className="authenticationErrorMessage">{errorMessage}</div>
    </>

  );
};

AccountDetails.propTypes = {
  accountDetails: PropTypes.shape({
    addres: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
  }),
  errorMessage: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

AccountDetails.defaultProps = {
  accountDetails: {},
};

export default AccountDetails;
