import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  registerUserFailure,
  registerUserRequest,
  registerUserSuccess,
} from "../../redux/reducers/Register";

function* handleRegister(action) {
  try {
    yield call(() =>
      axios.post(`${process.env.REACT_APP_API_URL}/register`(action.payload))
    );
    yield put(registerUserSuccess());
  } catch (error) {
    yield put(registerUserFailure(error.message));
  }
}

export default function* registerSaga() {
  yield takeLatest(registerUserRequest.type, handleRegister);
}
