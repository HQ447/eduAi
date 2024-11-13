import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
  currStatus: "Home",
  showSidebar: false,
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
    updateShowSidebar: (state, action) => {
      state.showSidebar = action.payload;
    },
  },
});

export const { updateMode, updateCurrStatus, updateShowSidebar } =
  cartSlice.actions;

export default cartSlice.reducer;
