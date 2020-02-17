// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import authenticationReducer from '../Reducers/authenticationReducer';
// Redux: Root Reducer
const rootReducer = combineReducers({
  authentication: authenticationReducer,
});
// Exports
export default rootReducer;