import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initState = {
  value: 0,
};

const valueReducer = (state = initState, action: any) => {
  if (action.type === "go") {
    return {
      ...state,
      value: state.value + 1,
    };
  }
  return state;
};

const store = createStore(valueReducer);

export default store;
