import { call, put, takeLatest } from "redux-saga/effects";
import {
  planFailure,
  planRequest,
  planSuccess,
} from "../../redux/reducers/Plan";
import axios from "axios";

function* planHandle() {
  try {
    const response = yield call(() =>
      axios.get(`${process.env.REACT_APP_API_URL}/plans`)
    );
    yield put(planSuccess(response.data.data));
  } catch (err) {
    yield put(planFailure(err));
  }
}

export default function* planSaga() {
  yield takeLatest(planRequest.type, planHandle);
}
