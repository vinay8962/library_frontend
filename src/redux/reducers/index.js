import { combineReducers } from "@reduxjs/toolkit";
import roleSlice from "./Role";
import registerSlice from "./Register";
import loginSlice from "./Login";

const rootReducers = combineReducers({
  roles: roleSlice,
  register: registerSlice,
  login: loginSlice,
});

export default rootReducers;
