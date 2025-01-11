import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roles: [],
  loading: false,
  error: null,
};

const roleSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {
    fetchRolesRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchRolesSuccess: (state, action) => {
      state.loading = false;
      state.roles = action.payload;
    },
    fetchRolesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchRolesFailure, fetchRolesRequest, fetchRolesSuccess } =
  roleSlice.actions;

export default roleSlice.reducer;
