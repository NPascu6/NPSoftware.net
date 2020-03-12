import { takeEvery, fork, call, put } from "redux-saga/effects";
import * as actions from "../Constants/userManagementActionNames";
import firebaseService from "../API/firebaseConfig";

const addUserDetails = async action => {
  let details = action.payload;
  return firebaseService
    .database()
    .ref("/userList")
    .set(details)
    .then(() => {
      return "Added";
    });
};

const getUser = async () => {
  return await firebaseService
    .database()
    .ref("/userList")
    .once("value", snapshot => {
      return snapshot;
    });
};

function* addDetails(user) {
  let response = yield addUserDetails(user);
  console.log(response);
}

function* getUserDetails() {
  let details = yield getUser();

  if (details.length !== 0)
    yield put({
      type: actions.GET_USER_DETAILS_REQUEST_SUCCESS,
      payload: details.val()
    });
}

function* watchAddUserDetails() {
  yield takeEvery(actions.ADD_USER_DETAILS_REQUEST, addDetails);
}

function* watchGetUserDetails() {
  yield takeEvery(actions.GET_USER_DETAILS_REQUEST, getUserDetails);
}

const userManagementSaga = [
  fork(watchAddUserDetails),
  fork(watchGetUserDetails)
];

export default userManagementSaga;
