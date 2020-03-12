import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import '../Styles/AuthenticationForm.css';

const AccountDetails = (props) => {
  const [Email, setEmail] = useState('');
  const [Addres, setAddres] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [UserName, setUserName] = useState('');

  const submit = () => {
    const newDetails = {
      Email,
      Addres,
      PhoneNumber,
      UserName,
    };
    props.action(newDetails);
  };

  return (
    <>
      <div className="authenticationIcon">{}</div>
      <div className="authenticationRowContainer">
        <label className="authenticationLabel">Email:</label>
        <TextField
          className="authenticationInput"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder={props.accountDetails.Email}
        />
      </div>
      <div className="authenticationRowContainer">
        <label className="authenticationLabel">addres:</label>
        <TextField
          value={Addres}
          onChange={(e) => setAddres(e.target.value)}
          name="address"
          placeholder={props.accountDetails.Addres}
        />
      </div>
      <div className="authenticationRowContainer">
        <label className="authenticationLabel">Phone Number:</label>
        <TextField
          value={PhoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          name="phoneNumber"
          type="phoneNumber"
          placeholder={props.accountDetails.PhoneNumber}
        />
      </div>
      <div className="authenticationRowContainer">
        <label className="authenticationLabel">User Name:</label>
        <TextField
          value={UserName}
          onChange={(e) => setUserName(e.target.value)}
          name="userName"
          placeholder={props.accountDetails.UserName}
        />
      </div>
      <div>
        <button className="authenticationButton" onClick={submit}>
          Save
        </button>
      </div>
      <div className="authenticationErrorMessage">{props.errorMessage}</div>
    </>

  );
};

export default AccountDetails;
