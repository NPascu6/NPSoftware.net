import React, { useState } from 'react';
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
          placeholder={accountDetails.Email}
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
          placeholder={accountDetails.Addres}
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
          placeholder={accountDetails.PhoneNumber}
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
          placeholder={accountDetails.UserName}
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
    Addres: PropTypes.string.isRequired,
    PhoneNumber: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    UserName: PropTypes.string.isRequired,
  }),
  errorMessage: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

AccountDetails.defaultProps = {
  accountDetails: {},
};

export default AccountDetails;
