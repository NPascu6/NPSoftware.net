// Imports: Dependencies
import { all, fork} from 'redux-saga/effects';
// Imports: Redux Sagas
import { watchSignUp, watchSignIn } from '../Sagas/authenticationSaga';
// Redux Saga: Root Saga
export function* rootSaga () {
  yield all([
    fork(watchSignUp),
    fork(watchSignIn),
  ]);
};