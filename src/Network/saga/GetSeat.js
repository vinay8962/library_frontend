import { call, put, takeLatest } from "redux-saga/effects";
import {
  getSeatFailure,
  getSeatRequest,
  getSeatSuccess,
} from "../../redux/reducers/GetSeat";
import axios from "axios";

function* getSeat(action) {
  const { id } = action.payload;
  try {
    const response = yield call(() =>
      axios.get(`${process.env.REACT_APP_API_URL}/libraryseat/libraryId/${id}`)
    );
    yield put(getSeatSuccess(response.data.data));
  } catch (error) {
    yield put(getSeatFailure(error));
  }
}

export default function* getSeatSaga() {
  yield takeLatest(getSeatRequest.type, getSeat);
}
