import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  libraryUser: [],
  loading: false,
  error: null,
};

const libraryUser = createSlice({
  name: "libraryUser",
  initialState,
  reducers: {
    getLibraryUserRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getLibraryUserSuccess: (state, action) => {
      state.libraryUser = action.payload;
      state.loading = false;
    },
    getLibraryUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getLibraryUserRequest,
  getLibraryUserSuccess,
  getLibraryUserFailure,
} = libraryUser.actions;

export default libraryUser.reducer;
