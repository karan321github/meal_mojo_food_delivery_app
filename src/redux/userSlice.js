import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.loading = true;
      state.user = action.payload;
    },
    signOut: (state) => {
      (state.user = ""), (state.loading = false), (state.error = false);
    },
  },
});

export const { signIn, signOut } = userSlice.reducer;
export default userSlice.reducer;
