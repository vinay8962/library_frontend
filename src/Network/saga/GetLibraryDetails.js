import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  getLibraryDetailsFailure,
  getLibraryDetailsRequest,
  getLibraryDetailsSuccess,
} from "../../redux/reducers/GetLibraryDetails";

function* handleLibraryDetails(action) {
  const { id, token } = action.payload;
  console.log(id, token, "Saga file"); // Debugging

  try {
    // API call to fetch library details
    const response = yield call(() =>
      axios.get(`${process.env.REACT_APP_API_URL}/library/librarybyid/${id}`, {
        headers: {
          Authorization: token, // Fixed token format
          "Content-Type": "application/json",
        },
      })
    );
    console.log(response.data.data, "API Response"); // Debugging
    yield put(getLibraryDetailsSuccess(response.data.data)); // Dispatch success
  } catch (err) {
    console.error("Error in Saga:", err); // Debugging
    yield put(
      getLibraryDetailsFailure(
        err.response?.data?.message || "Failed to fetch library details"
      )
    );
  }
}

export default function* getLibraryDetailsSaga() {
  yield takeLatest(getLibraryDetailsRequest.type, handleLibraryDetails);
}
