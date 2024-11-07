import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

export const cartSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    updateMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const { updateMode } = cartSlice.actions;

export default cartSlice.reducer;
