import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import "../Styles/AuthenticationForm.css";

const AccountDetails = props => {
  const [accountDetails, setAccountDetails] = useState("");
  const [email, setEmail] = useState("");
  const [addres, setAddres] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userName, setUserName] = useState("");

  const submit = () => {
    let newDetails = {
      email,
      addres,
      phoneNumber,
      userName
    };
    console.log(newDetails);
    props.action(newDetails);
  };

  return (
    <div className="authenticationContainer">
      <div className="authenticationIcon">{}</div>
      <div className="authenticationFormHeader">Account</div>
      <div className="authenticationRowContainer">
        <label className="authenticationLabel">Email:</label>
        <TextField
          className="authenticationInput"
          value={email}
          onChange={e => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder={props.accountDetails.email}
        />
      </div>
      <div className="authenticationRowContainer">
        <label className="authenticationLabel">addres:</label>
        <TextField
          value={addres}
          onChange={e => setAddres(e.target.value)}
          name="address"
          placeholder={props.accountDetails.addres}
        />
      </div>
      <div className="authenticationRowContainer">
        <label className="authenticationLabel">Phone Number:</label>
        <TextField
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
          name="phoneNumber"
          type="phoneNumber"
          placeholder={props.accountDetails.phoneNumber}
        />
      </div>
      <div className="authenticationRowContainer">
        <label className="authenticationLabel">User Name:</label>
        <TextField
          value={userName}
          onChange={e => setUserName(e.target.value)}
          name="userName"
          placeholder={props.accountDetails.userName}
        />
      </div>
      <div>
        <button className="authenticationButton" >
          Save
        </button>
      </div>
      <div className="authenticationErrorMessage">{props.errorMessage}</div>
    </div>
  );
};

export default AccountDetails;
