import { combineReducers } from "@reduxjs/toolkit";
import roleSlice from "./Role";
import registerSlice from "./Register";
import loginSlice from "./Login";
import createLibrarySlice from "./CreateLibrary";
import getLibrarySlice from "./GetLibrary";
import planSlice from "./Plan";
import getLibraryDetailsSlice from "./GetLibraryDetails";
import libraryPlanSlice from "./LibraryPlan";
import LibraryUser from "./LibraryUser";
import getSeat from "./GetSeat";
import getUser from "./GetUser";
import seatBookingSlice from "./SeatBooking";

const rootReducers = combineReducers({
  roles: roleSlice,
  register: registerSlice,
  login: loginSlice,
  CreateLibrary: createLibrarySlice,
  getLibrary: getLibrarySlice,
  plans: planSlice,
  LibraryDetails: getLibraryDetailsSlice,
  libraryPlan: libraryPlanSlice,
  libraryUser: LibraryUser,
  getSeat: getSeat,
  getUser: getUser,
  seatBooking: seatBookingSlice,
});

export default rootReducers;
