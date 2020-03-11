import * as actions from "../Constants/userManagementActionNames";

export const addUserDetailsRequest = () => ({
  type: actions.ADD_USER_DETAILS_REQUEST
});

export const getUserDetailsRequest = () => ({
  type: actions.GET_USER_DETAILS_REQUEST
});
