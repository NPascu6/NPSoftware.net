import {
  SIGN_IN_ACTION_SUCCESS,
  SIGN_UP_ACTION_SUCCESS,
  SIGN_IN_ACTION_FAILED,
  SIGN_UP_ACTION_FAILED
} from "../Actions/authenticationActions";

const initialState = {
  loggedIn: false,
  errorMessage: "",
  token: null
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_ACTION_SUCCESS:
      console.log(action.payload.user.refreshToken);
      return {
        ...state,
        loggedIn: true,
        token: action.payload.user.refreshToken
      };
    case SIGN_UP_ACTION_SUCCESS:
      console.log(action.payload.user.refreshToken);
      return {
        ...state,
        loggedIn: true,
        token: action.payload.user.refreshToken
      };
    case SIGN_IN_ACTION_FAILED:
      return {
        ...state,
        errorMessage: action.payload
      };
    case SIGN_UP_ACTION_FAILED:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default authenticationReducer;
