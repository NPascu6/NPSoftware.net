export const SIGN_UP_ACTION_REQUEST = "SIGN_UP_ACTION_REQUEST";
export const SIGN_IN_ACTION_REQUEST = "SIGN_IN_ACTION_REQUEST";
export const SIGN_IN_ACTION_SUCCESS = "SIGN_IN_ACTION_SUCCESS";
export const SIGN_UP_ACTION_SUCCESS = "SIGN_UP_ACTION_SUCCESS";
export const SIGN_UP_ACTION_FAILED = "SIGN_UP_ACTION_FAILED";
export const SIGN_IN_ACTION_FAILED = "SIGN_IN_ACTION_FAILED";

export const signUpActionRequest = action => ({
  type: SIGN_UP_ACTION_REQUEST,
  payload: action.payload
});
// key: payload will contain result of the api call
export const signInActionRequest = action => ({
  type: SIGN_IN_ACTION_REQUEST,
  payload: action.payload
});

export const signUpActionRequestSuccess = ({ data }) => ({
  type: SIGN_UP_ACTION_SUCCESS,
  payload: "signuprequest"
});
// key: payload will contain result of the api call
export const signInActionRequestSuccess = ({ data }) => ({
  type: SIGN_IN_ACTION_REQUEST,
  payload: "siginrequest"
});
