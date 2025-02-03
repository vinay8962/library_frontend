import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  registerUserFailure,
  registerUserRequest,
  registerUserSuccess,
} from "../../redux/reducers/Register";

function* handleRegister(action) {
  try {
    console.log("API Request:", action.payload);
    const response = yield call(() =>
      axios.post(`${process.env.REACT_APP_API_URL}/users`, action.payload)
    );
    console.log("API Response:", response.data);
    yield put(registerUserSuccess());
  } catch (error) {
    console.error("API Error:", error);
    yield put(
      registerUserFailure(error?.response?.data?.message || error.message)
    );
  }
}

export default function* registerSaga() {
  yield takeLatest(registerUserRequest.type, handleRegister);
}
