import { all } from "redux-saga/effects";
import roleSaga from "./RoleSaga";
import registerSaga from "./RegisterSaga";
import loginSaga from "./LoginSaga";
import createLibrarySaga from "./CreateLibrarySaga";
import getLibrarySaga from "./GetLibrary";

export default function* rootSaga() {
  yield all([
    roleSaga(),
    registerSaga(),
    loginSaga(),
    createLibrarySaga(),
    getLibrarySaga(),
  ]);
}
