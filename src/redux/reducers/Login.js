import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: null,
  token: null,
  userId: null,
  loading: false,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.role = action.payload.role;
      state.token = action.payload.token;
      state.userId = action.payload.userId;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.token = null;
      state.role = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.role = null;
    },
  },
});

export const { loginFailure, loginRequest, loginSuccess, logout } =
  loginSlice.actions;
export default loginSlice.reducer;
