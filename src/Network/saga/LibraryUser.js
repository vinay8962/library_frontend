import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  getLibraryUserFailure,
  getLibraryUserRequest,
  getLibraryUserSuccess,
} from "../../redux/reducers/LibraryUser";

function* fetchLibraryUser(action) {
  try {
    const response = yield call(
      axios.get,
      `${process.env.REACT_APP_API_URL}/libraryUser/${action.payload}`
    );
    console.log(response.data.data);
    yield put(getLibraryUserSuccess(response.data.data));
  } catch (error) {
    yield put(getLibraryUserFailure(error.message));
  }
}

export default function* libraryUserSaga() {
  yield takeLatest(getLibraryUserRequest.type, fetchLibraryUser);
}
