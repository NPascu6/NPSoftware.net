import {
  SIGN_IN_ACTION_SUCCESS,
  SIGN_UP_ACTION_SUCCESS,
  SIGN_IN_ACTION_FAILED,
  SIGN_UP_ACTION_FAILED
} from "../Actions/authenticationActions";

const initialState = {
  loggedIn: false,
  errorMessage: ""
};

const authenticationReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case SIGN_IN_ACTION_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        loggedIn: true
      };
    case SIGN_UP_ACTION_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        loggedIn: true
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
