import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
  currStatus: "Home",
};

export const cartSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    updateMode: (state, action) => {
      state.darkMode = action.payload;
    },
    updateCurrStatus: (state, action) => {
      state.currStatus = action.payload;
    },
  },
});

export const { updateMode, updateCurrStatus } = cartSlice.actions;

export default cartSlice.reducer;
