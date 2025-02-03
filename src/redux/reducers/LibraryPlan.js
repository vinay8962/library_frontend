import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  libraryPlan: [], // Ensure correct naming
  error: null,
  loading: false,
};

const libraryPlanSlice = createSlice({
  name: "LibraryPlan",
  initialState,
  reducers: {
    libraryPlanRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    libraryPlanSuccess: (state, action) => {
      state.loading = false;
      state.libraryPlan = action.payload;
    },
    libraryPlanFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { libraryPlanFailure, libraryPlanRequest, libraryPlanSuccess } =
  libraryPlanSlice.actions;
export default libraryPlanSlice.reducer;
