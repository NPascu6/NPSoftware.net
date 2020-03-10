export const SIGN_UP_ACTION_REQUEST = "SIGN_UP_ACTION_REQUEST";
export const SIGN_IN_ACTION_REQUEST = "SIGN_IN_ACTION_REQUEST";

export const SIGN_IN_ACTION_SUCCESS = "SIGN_IN_ACTION_SUCCESS";
export const SIGN_UP_ACTION_SUCCESS = "SIGN_UP_ACTION_SUCCESS";

export const SIGN_UP_ACTION_FAILED = "SIGN_UP_ACTION_FAILED";
export const SIGN_IN_ACTION_FAILED = "SIGN_IN_ACTION_FAILED";

export const LOG_OUT_ACTION_REQUEST = "LOG_OUT_ACTION_REQUEST";
export const LOG_OUT_ACTION_SUCCESS = "LOG_OUT_ACTION_SUCCESS";

export const SET_TOKEN_REQUEST = "SET_TOKEN_REQUEST";
export const SET_TOKEN = "SET_TOKEN";

export const CLEAR_ERROR = "CLEAR_ERROR";

export const signUpActionRequest = action => ({
  type: SIGN_UP_ACTION_REQUEST,
  payload: action.payload
});

export const signInActionRequest = action => ({
  type: SIGN_IN_ACTION_REQUEST,
  payload: action.payload
});

export const logOutActionRequest = () => ({
  type: LOG_OUT_ACTION_SUCCESS
});

export const setTokenActionRequest = token => ({
  type: SET_TOKEN,
  payload: token
});

export const clearErrorRequest = () => ({
  type: CLEAR_ERROR
});
