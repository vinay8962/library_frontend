import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  getUserFailure,
  getUserRequest,
  getUserSuccess,
} from "../../redux/reducers/GetUser";

function* getUserHandle(action) {
  try {
    const id = action.payload;
    const response = yield call(() =>
      axios.get(`${process.env.REACT_APP_API_URL}/users/${id}`)
    );
    yield put(getUserSuccess(response.data.data));
  } catch (err) {
    yield put(getUserFailure(err.message)); // Fixed incorrect `yield call`
  }
}

export default function* getUserSaga() {
  yield takeLatest(getUserRequest.type, getUserHandle);
}
