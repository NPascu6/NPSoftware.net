import { SIGN_IN_ACTION, SIGN_UP_ACTION } from "../Actions/actionTypes";

const initialState = {
  loggedIn: false
};

const authenticationReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case SIGN_IN_ACTION:
      return {
        ...state,
        loggedIn: true
      }
    case SIGN_UP_ACTION:
      return {
        ...state,
        loggedIn: true
      }
    default:
      return state;
  }
};

export default authenticationReducer;
