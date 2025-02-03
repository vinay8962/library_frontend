import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  libraryPlanFailure,
  libraryPlanRequest,
  libraryPlanSuccess,
} from "../../redux/reducers/LibraryPlan";

function* getLibraryPlan(action) {
  const { id } = action.payload;
  try {
    const response = yield call(() =>
      axios.get(`${process.env.REACT_APP_API_URL}/libraryplan/${id}`)
    );
    console.log(response.data.data);
    yield put(libraryPlanSuccess(response.data.data));
  } catch (error) {
    yield put(
      libraryPlanFailure(
        error.response?.data?.message || "Failed to fetch library details"
      )
    );
  }
}

export default function* libraryPlanSaga() {
  yield takeLatest(libraryPlanRequest.type, getLibraryPlan);
}
