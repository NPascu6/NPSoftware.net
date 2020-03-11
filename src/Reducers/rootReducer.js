// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import authenticationReducer from '../Reducers/authenticationReducer';
import userManagementReducer from '../Reducers/userManagementReducer';
// Redux: Root Reducer
const rootReducer = combineReducers({
  authentication: authenticationReducer,
  userManagement: userManagementReducer
});
// Exports
export default rootReducer;