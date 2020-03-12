import {
    GET_USER_DETAILS_REQUEST_SUCCESS,
    GET_USER_DETAILS_REQUEST_FAILED,
    ADD_USER_DETAILS_REQUEST_SUCCESS,
    ADD_USER_DETAILS_REQUEST_FAILED
  } from "../Constants/userManagementActionNames";
  
  const initialState = {
    loader: false
  };
  
  const utilitiesReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_USER_DETAILS_REQUEST_SUCCESS:
        return {
          ...state,
          user: action.payload,
          errorMessage: ""
        };
      case GET_USER_DETAILS_REQUEST_FAILED:
        return {
          ...state,
          errorMessage: action.payload
        };
      case ADD_USER_DETAILS_REQUEST_SUCCESS:
        return {
          ...state,
          user: action.payload,
          errorMessage: ""
        };
      case ADD_USER_DETAILS_REQUEST_FAILED:
        return {
          ...state,
          user: {},
          errorMessage: action.payload
        };
      default:
        return state;
    }
  };
  
  export default utilitiesReducer;
  