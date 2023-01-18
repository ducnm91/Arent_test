import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: !!localStorage.getItem("ACCESS_TOKEN"),
  },
  reducers: {
    login: (state) => {
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
      localStorage.removeItem("ACCESS_TOKEN");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
