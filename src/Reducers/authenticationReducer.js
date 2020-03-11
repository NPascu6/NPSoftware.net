import {
  SIGN_IN_ACTION_SUCCESS,
  SIGN_UP_ACTION_SUCCESS,
  SIGN_IN_ACTION_FAILED,
  SIGN_UP_ACTION_FAILED,
  LOG_OUT_ACTION_SUCCESS,
  SET_TOKEN,
  CLEAR_ERROR
} from "../Constants/authenticationActionNames";

const initialState = {
  errorMessage: "",
  token: null
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_ACTION_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        token: action.payload.user.refreshToken,
        errorMessage: ""
      };
    case SIGN_UP_ACTION_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        token: action.payload.user.refreshToken,
        errorMessage: ""
      };
    case SIGN_IN_ACTION_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
        token: null
      };
    case SIGN_UP_ACTION_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
        token: null
      };
    case LOG_OUT_ACTION_SUCCESS:
      return {
        ...state,
        token: null,
        errorMessage: ""
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    case CLEAR_ERROR:
      return {
        ...state,
        errorMessage: ""
      };
    default:
      return state;
  }
};

export default authenticationReducer;
