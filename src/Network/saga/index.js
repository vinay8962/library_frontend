import { all } from "redux-saga/effects";
import roleSaga from "./RoleSaga";
import registerSaga from "./RegisterSaga";
import loginSaga from "./LoginSaga";
import createLibrarySaga from "./CreateLibrarySaga";
import getLibrarySaga from "./GetLibrary";
import planSaga from "./Plan";
import getLibraryDetailsSaga from "./GetLibraryDetails";
import libraryPlanSaga from "./LibraryPlan";
import libraryUserSaga from "./LibraryUser";
import getSeatSaga from "./GetSeat";
import seatBookingSaga from "./SeatBooking";
export default function* rootSaga() {
  yield all([
    roleSaga(),
    registerSaga(),
    loginSaga(),
    createLibrarySaga(),
    getLibrarySaga(),
    planSaga(),
    getLibraryDetailsSaga(),
    libraryPlanSaga(),
    libraryUserSaga(),
    getSeatSaga(),
    seatBookingSaga(),
  ]);
}
