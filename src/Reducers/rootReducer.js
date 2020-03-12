// Imports: Dependencies
import { combineReducers } from "redux";
// Imports: Reducers
import authenticationReducer from "../Reducers/authenticationReducer";
import userManagementReducer from "../Reducers/userManagementReducer";
import utitlitiesReducer from "../Reducers/utilitiesReducer";

// Redux: Root Reducer
const rootReducer = combineReducers({
  authentication: authenticationReducer,
  userManagement: userManagementReducer,
  utitlitiesReducer: utitlitiesReducer
});
// Exports
export default rootReducer;
