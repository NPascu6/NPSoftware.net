import {
  takeEvery, fork, put,
} from 'redux-saga/effects';
import * as actions from '../Constants/userManagementActionNames';
import firebaseService from '../API/firebaseConfig';

const addUserDetails = async (action) => {
  const details = action.payload;
  return firebaseService
    .database()
    .ref('/userList')
    .set(details)
    .then(() => 'Added');
};

const getUser = () => firebaseService
  .database()
  .ref('/userList')
  .once('value', (snapshot) => snapshot);

function* addDetails(user) {
  const response = yield addUserDetails(user);
  if (response) {
    yield put({
      type: actions.ADD_USER_DETAILS_REQUEST_SUCCESS,
      payload: user.payload,
    });
  }
}

function* getUserDetails() {
  const details = yield getUser();

  if (details.length !== 0) {
    yield put({
      type: actions.GET_USER_DETAILS_REQUEST_SUCCESS,
      payload: details.val(),
    });
  }
}

function* watchAddUserDetails() {
  yield takeEvery(actions.ADD_USER_DETAILS_REQUEST, addDetails);
}

function* watchGetUserDetails() {
  yield takeEvery(actions.GET_USER_DETAILS_REQUEST, getUserDetails);
}

const userManagementSaga = [
  fork(watchAddUserDetails),
  fork(watchGetUserDetails),
];

export default userManagementSaga;
