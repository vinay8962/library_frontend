import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  seatBookingFailure,
  seatBookingRequest,
  seatBookingSuccess,
} from "../../redux/reducers/SeatBooking";

function* seatBookingHandle(action) {
  try {
    const data = action.payload;
    const response = yield call(() => {
      axios.post(`${process.env.REACT_APP_API_URL}/bookinglibrary`, data);
    });
    console.log(response);
    yield put(seatBookingSuccess());
  } catch (err) {
    yield put(seatBookingFailure(err));
  }
}

export default function* seatBookingSaga() {
  yield takeLatest(seatBookingRequest.type, seatBookingHandle);
}
