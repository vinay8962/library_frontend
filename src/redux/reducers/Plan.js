import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plan: [],
  loading: false,
  error: null,
};
const planSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {
    planRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    planSuccess: (state, action) => {
      state.loading = false;
      state.plan = action.payload;
    },
    planFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { planFailure, planRequest, planSuccess } = planSlice.actions;

export default planSlice.reducer;
