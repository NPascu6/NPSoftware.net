import { takeEvery, fork, put, call } from "redux-saga/effects";
import * as actions from "../Actions/authenticationActions";
import firebaseService from "../API/firebaseConfig";

// create a generator function

const signUpAsync = async (user) => {
  debugger;
  let token = await firebaseService
    .auth()
    .createUserWithEmailAndPassword(user.email, user.password);
  return token;
};

const signInAsync = async (user) => {
  let token = await firebaseService
    .auth()
    .signInWithEmailAndPassword(user.email, user.password);
  return token;
};

function* signin(action) {
  try {
    const user = {
      email: action.payload.Email,
      password: action.payload.Password
    };
    const token = yield call(signInAsync, user);
    yield put({ type: actions.SIGN_IN_ACTION_SUCCESS, payload: token });
  } catch (e) {
    yield put({ type: actions.SIGN_IN_ACTION_FAILED, payload: e.message });
  }
}

function* signup(action) {
  try {
    const user = {
      email: action.payload.Email,
      password: action.payload.Password
    };
    const token = yield call(signUpAsync, user);
    yield put({ type: actions.SIGN_IN_ACTION_SUCCESS, paytload: token });
  } catch (e) {
    yield put({ type: actions.SIGN_IN_ACTION_FAILED, payload: e.message });
  }
}
function* watchSignin() {
  // create watcher of fetchData function
  yield takeEvery(actions.SIGN_IN_ACTION_REQUEST, signin);
}
function* watchSignup() {
  // create watcher of fetchData function
  yield takeEvery(actions.SIGN_UP_ACTION_REQUEST, signup);
}

const authenticationSaga = [fork(watchSignin), fork(watchSignup)];

export default authenticationSaga;
