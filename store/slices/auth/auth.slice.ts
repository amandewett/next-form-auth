import { createSlice } from "@reduxjs/toolkit";
import { redirect } from "next/navigation";

const initialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    signup(state) {},
    logout(state) {
      state.isLoggedIn = false;
      // redirect("/login");
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
