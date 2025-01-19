import { call, put, takeLatest } from "redux-saga/effects";
import {
  createLibraryFailure,
  createLibraryRequest,
  createLibrarySuccess,
} from "../../redux/reducers/CreateLibrary";
import axios from "axios";

function* handleCreateLibrary(action) {
  try {
    yield call(() => {
      const { data, token } = action.payload;

      axios.post(`${process.env.REACT_APP_API_URL}/library`, data, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
    });

    yield put(createLibrarySuccess());
  } catch (error) {
    yield put(createLibraryFailure(error));
  }
}

export default function* createLibrarySaga() {
  yield takeLatest(createLibraryRequest.type, handleCreateLibrary);
}
