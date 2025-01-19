import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
};
const createLibrarySlice = createSlice({
  name: "CreateLibrary",
  initialState,
  reducers: {
    createLibraryRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    createLibrarySuccess: (state) => {
      state.loading = false;
    },
    createLibraryFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  createLibraryFailure,
  createLibraryRequest,
  createLibrarySuccess,
} = createLibrarySlice.actions;

export default createLibrarySlice.reducer;
