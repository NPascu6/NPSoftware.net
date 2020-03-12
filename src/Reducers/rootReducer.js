// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import authenticationReducer from './authenticationReducer';
import userManagementReducer from './userManagementReducer';
import utitlitiesReducer from './utilitiesReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  authentication: authenticationReducer,
  userManagement: userManagementReducer,
  utitlitiesReducer,
});
// Exports
export default rootReducer;
