import { createSlice } from "@reduxjs/toolkit";

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
    signUpStart: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    signUpSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.userInfo = action.payload;
      state.loading = false;
    },
    signUpFailure: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },

    logOut: (state) => {
      state.isLoggedIn = false;
      state.userInfo = null;
    },
  },
});

export const { signUpStart, signUpSuccess, signUpFailure, logOut } =
  userSlice.reducer;
export default userSlice.reducer;
