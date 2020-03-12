import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { logOutActionRequest } from '../Actions/authenticationActions';

const LogOutButton = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const history = useHistory();
  const logOut = () => {
    removeCookie('token');
    logOutActionRequest();
    history.push('/');
  };

  return <button type="button" onClick={logOut} label="Log out" value="Log Out" />;
};

const mapStateToProps = (state) => ({
  errorMessage: state.authentication.errorMessage,
  token: state.authentication.token,
});

export default connect(mapStateToProps, { logOutActionRequest })(LogOutButton);
