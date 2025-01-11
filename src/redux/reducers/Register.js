import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
};

const registerSlice = createSlice({
  name: "registerUser",
  initialState,
  reducers: {
    registerUserRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    registerUserSuccess: (state) => {
      state.loading = false;
    },
    registerUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { registerUserFailure, registerUserRequest, registerUserSuccess } =
  registerSlice.actions;

export default registerSlice.reducer;
