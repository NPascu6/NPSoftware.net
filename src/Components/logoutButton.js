import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { logOutActionRequest } from '../Actions/authenticationActions';

const LogOutButton = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const history = useHistory();
  const logOut = () => {
    removeCookie('token');
    props.logOutActionRequest();
    history.push('/');
  };

  return (
    <>
      <button onClick={logOut}>Log out</button>
    </>
  );
};

const mapStateToProps = (state) => ({
  errorMessage: state.authentication.errorMessage,
  token: state.authentication.token,
});

export default connect(mapStateToProps, { logOutActionRequest })(LogOutButton);
