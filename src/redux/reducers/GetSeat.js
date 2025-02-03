import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seat: [],
  loading: false,
  error: null,
};
const getSeat = createSlice({
  name: "seat",
  initialState,
  reducers: {
    getSeatRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getSeatSuccess: (state, action) => {
      state.seat = action.payload;
      state.loading = false;
    },
    getSeatFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getSeatRequest, getSeatSuccess, getSeatFailure } =
  getSeat.actions;
export default getSeat.reducer;
