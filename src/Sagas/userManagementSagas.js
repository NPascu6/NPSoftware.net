import { takeEvery, fork, call, put } from "redux-saga/effects";
import * as actions from "../Constants/userManagementActionNames";
import firebaseService from "../API/firebaseConfig";

const addUserDetailsAsync = async userDetails => {
  firebaseService
    .database()
    .ref("/userList")
    .set({
      UserName: "test1",
      Email: "test@email",
      PhoneNumber: "0742322221",
      Address: "test adress 112",
      ProfilePicture: ""
    });
};

const getUserDetailsAsync = async userDetails => {
  firebaseService
    .database()
    .ref("/userList")
    .once("value")
    .then(snpashot => snpashot.val());
};

function* addUserDetails() {
  yield call(addUserDetailsAsync);
}

function* getUserDetails() {
  var roomRef = firebaseService.database().ref("/userList");
  let details = yield call(() => {
    return new Promise(function(resolve, reject) {
      roomRef.once("value", snap => {
        let details = [];
        let roomkeys = snap.val();
        firebaseService
          .database()
          .ref("/userList")
          .once("value", item => {
            debugger
            details.push(item.val());
          });

        resolve(details);
      });
    });
  });
  console.log(details);
  debugger
  yield put({
    type: actions.GET_USER_DETAILS_REQUEST_SUCCESS
  });
}

function* watchAddUserDetails() {
  yield takeEvery(actions.ADD_USER_DETAILS_REQUEST, addUserDetails);
}

function* watchGetUserDetails() {
  yield takeEvery(actions.GET_USER_DETAILS_REQUEST, getUserDetails);
}

const userManagementSaga = [
  fork(watchAddUserDetails),
  fork(watchGetUserDetails)
];

export default userManagementSaga;
