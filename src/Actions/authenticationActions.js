import * as actions from '../Constants/authenticationActionNames';

export const signUpActionRequest = (action) => ({
  type: actions.SIGN_UP_ACTION_REQUEST,
  payload: action.payload,
});

export const signInActionRequest = (action) => ({
  type: actions.SIGN_IN_ACTION_REQUEST,
  payload: action.payload,
});

export const logOutActionRequest = () => ({
  type: actions.LOG_OUT_ACTION_SUCCESS,
});

export const setTokenActionRequest = (token) => ({
  type: actions.SET_TOKEN,
  payload: token,
});

export const clearErrorRequest = () => ({
  type: actions.CLEAR_ERROR,
});
