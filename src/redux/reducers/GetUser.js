import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  loading: false,
  error: null,
};
const getUser = createSlice({
  name: "getUser",
  initialState,
  reducers: {
    getUserRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getUserSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    getUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getUserRequest, getUserSuccess, getUserFailure } =
  getUser.actions;
export default getUser.reducer;
