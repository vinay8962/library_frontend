import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  library: [],
  loading: false,
  error: null,
};

const getLibrarySlice = createSlice({
  name: "GetLibrary",
  initialState,
  reducers: {
    getLibraryRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getLibrarySuccess: (state, action) => {
      state.loading = false;
      state.library = action.payload;
    },
    getLibraryFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getLibraryFailure, getLibraryRequest, getLibrarySuccess } =
  getLibrarySlice.actions;

export default getLibrarySlice.reducer;
