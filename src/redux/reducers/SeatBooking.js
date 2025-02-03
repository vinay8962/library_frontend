import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
};
const seatBookingSlice = createSlice({
  name: "SeatBooking",
  initialState,
  reducers: {
    seatBookingRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    seatBookingSuccess: (state) => {
      state.loading = false;
    },
    seatBookingFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { seatBookingRequest, seatBookingSuccess, seatBookingFailure } =
  seatBookingSlice.actions;

export default seatBookingSlice.reducer;
