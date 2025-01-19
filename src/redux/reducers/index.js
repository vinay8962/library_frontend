import { combineReducers } from "@reduxjs/toolkit";
import roleSlice from "./Role";
import registerSlice from "./Register";
import loginSlice from "./Login";
import createLibrarySlice from "./CreateLibrary";
import getLibrarySlice from "./GetLibrary";

const rootReducers = combineReducers({
  roles: roleSlice,
  register: registerSlice,
  login: loginSlice,
  CreateLibrary: createLibrarySlice,
  getLibrary: getLibrarySlice,
});

export default rootReducers;
