import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchRolesFailure,
  fetchRolesRequest,
  fetchRolesSuccess,
} from "../../redux/reducers/Role";

// Fetch Roles Saga
function* handleRoles() {
  try {
    const response = yield call(() =>
      axios.get(`${process.env.REACT_APP_API_URL}/role`)
    );
    yield put(fetchRolesSuccess(response.data.data || []));
  } catch (error) {
    yield put(fetchRolesFailure(error.message));
  }
}

// Watcher Saga
export default function* roleSaga() {
  yield takeLatest(fetchRolesRequest.type, handleRoles); // ✅ Corrected Action Type
}
