import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const rootReducers = combineReducers({ user: userReducer });

export const store = configureStore({
  reducer: rootReducers,
});
