import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

const initialState = {
  isLoggedIn: false,
  userInfo: null,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.userInfo = action.payload;
      state.loading = false;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },

    logOut: (state) => {
      state.isLoggedIn = false;
      state.userInfo = null;
    },
  },
});

export const { signInStart, signInSuccess, signInFailure, logOut } =
  userSlice.reducer;
export default userSlice.reducer;
