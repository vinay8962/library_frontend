import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  libraryDetails: [],
  loading: false,
  error: null,
};
const getLibraryDetailsSlice = createSlice({
  name: "GetLibraryDetails",
  initialState,
  reducers: {
    getLibraryDetailsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getLibraryDetailsSuccess: (state, action) => {
      state.loading = false;
      state.libraryDetails = action.payload;
    },
    getLibraryDetailsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getLibraryDetailsFailure,
  getLibraryDetailsRequest,
  getLibraryDetailsSuccess,
} = getLibraryDetailsSlice.actions;

export default getLibraryDetailsSlice.reducer;
