import { call, put, takeLatest } from "redux-saga/effects";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
} from "../../redux/reducers/Login";
import axios from "axios";
import { toast } from "react-toastify";

function* handleLogin(action) {
  try {
    const response = yield call(
      axios.post,
      `${process.env.REACT_APP_API_URL}/users/login`,
      action.payload
    );
    const { role, token, userId } = response.data.data;
    console.log(response.data.data);
    yield put(loginSuccess({ role, token, userId }));
    toast.success("Login successful!");
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Login failed!";
    yield put(loginFailure(errorMessage));
    toast.error(errorMessage);
  }
}

export default function* loginSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
}
