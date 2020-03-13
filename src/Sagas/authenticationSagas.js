import {
  takeEvery, fork, put, call,
} from 'redux-saga/effects';
import * as actions from '../Constants/authenticationActionNames';
import firebaseService from '../API/firebaseConfig';

const signUpAsync = async (user) => {
  const token = await firebaseService
    .auth()
    .createUserWithEmailAndPassword(user.email, user.password);
  return token;
};

const signInAsync = async (user) => {
  const token = await firebaseService.auth().signInWithEmailAndPassword(user.email, user.password);
  return token;
};

function* setToken(token) {
  yield put({ type: actions.SET_TOKEN, payload: token });
}

function* logout() {
  yield put({ type: actions.LOG_OUT_ACTION_SUCCESS, payload: null });
}

function* signin(action) {
  try {
    const user = {
      email: action.payload.Email,
      password: action.payload.Password,
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
      password: action.payload.Password,
    };
    const token = yield call(signUpAsync, user);
    yield put({ type: actions.SIGN_UP_ACTION_SUCCESS, payload: token });
  } catch (e) {
    yield put({ type: actions.SIGN_UP_ACTION_FAILED, payload: e.message });
  }
}

function* watchSignin() {
  yield takeEvery(actions.SIGN_IN_ACTION_REQUEST, signin);
}
function* watchSignup() {
  yield takeEvery(actions.SIGN_UP_ACTION_REQUEST, signup);
}

function* watchLogout() {
  yield takeEvery(actions.LOG_OUT_ACTION_REQUEST, logout);
}

function* watchSettoken() {
  yield takeEvery(actions.SET_TOKEN_REQUEST, setToken);
}

const authenticationSaga = [
  fork(watchSignin),
  fork(watchSignup),
  fork(watchLogout),
  fork(watchSettoken),
];

export default authenticationSaga;
