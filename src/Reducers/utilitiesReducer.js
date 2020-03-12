import {
    LOADING_TRUE,
    LOADING_FALSE,
  } from "../Constants/staticStrings";
  
  const initialState = {
    loader: false
  };
  
  const utilitiesReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOADING_TRUE:
        return {
          ...state,
          loader: true
        };
      case LOADING_FALSE:
        return {
          ...state,
          loader: false
        };
      default:
        return state;
    }
  };
  
  export default utilitiesReducer;
  