import * as actions from '../Constants/userManagementActionNames';

export const addUserDetailsRequest = (action) => ({
  type: actions.ADD_USER_DETAILS_REQUEST,
  payload: action.payload,
});

export const getUserDetailsRequest = () => ({
  type: actions.GET_USER_DETAILS_REQUEST,
});
