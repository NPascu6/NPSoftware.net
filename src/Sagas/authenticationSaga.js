// Imports: Dependencies
import { takeLatest, put } from "redux-saga/effects";
import { SIGN_IN_ACTION, SIGN_UP_ACTION } from "../Actions/actionTypes";

function* signIn() {
  try {
    // Dispatch Action To Redux Store
    yield put({
      type: SIGN_IN_ACTION
    });
  } catch (error) {
    console.log(error);
  }
}

export function* watchSignIn() {
  yield takeLatest(SIGN_IN_ACTION, signIn);
}

function* signUp() {
  try {
    // Dispatch Action To Redux Store
    yield put({
      type: SIGN_UP_ACTION
    });
  } catch (error) {
    console.log(error);
  }
}

export function* watchSignUp() {
  yield takeLatest(SIGN_UP_ACTION, signUp);
}
