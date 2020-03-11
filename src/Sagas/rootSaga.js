// Imports: Dependencies
import { all } from "redux-saga/effects";

// Imports: Redux Sagas
import authenticationSaga from "./authenticationSagas";
import userManagementSaga from "./userManagementSagas";
// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([...authenticationSaga, ...userManagementSaga]);
}
