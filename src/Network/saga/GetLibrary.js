import { call, put, takeLatest } from "redux-saga/effects";
import {
  getLibraryFailure,
  getLibraryRequest,
  getLibrarySuccess,
} from "../../redux/reducers/GetLibrary";
import axios from "axios";

function* handleLibrary(action) {
  try {
    const { token, userId } = action.payload;

    // Replace with the correct API URL
    const response = yield call(() =>
      axios.get(`${process.env.REACT_APP_API_URL}/library/${userId}`, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      })
    );
    // Dispatch success action with data
    console.log(response.data.data);
    yield put(getLibrarySuccess(response.data.data));
  } catch (err) {
    // Dispatch failure action with error
    yield put(getLibraryFailure(err.message || "Failed to fetch libraries"));
  }
}

export default function* getLibrarySaga() {
  yield takeLatest(getLibraryRequest.type, handleLibrary);
}
