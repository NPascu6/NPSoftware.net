import { takeEvery, fork, call } from "redux-saga/effects";
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
    .on("value", snapshot => {
      console.log(snapshot.val());
    });
};

function* addUserDetails() {
  yield call(addUserDetailsAsync);
}

function* getUserDetails() {
  yield call(getUserDetailsAsync);
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
