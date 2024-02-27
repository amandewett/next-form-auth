import { configureStore, createSlice } from "@reduxjs/toolkit";
import { authReducers } from "@/store/slices";

export const reduxStore = configureStore({
  reducer: {
    auth: authReducers,
  },
});

export type AppState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = ReturnType<typeof reduxStore.dispatch>;
