import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  userData: {},
  allProduct: [],
  tempArr: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, action) => {
      state.cart = action.payload;
    },
    updateallProduct: (state, action) => {
      state.allProduct = action.payload;
    },

    updateUserData: (state, action) => {
      state.userData = action.payload;
    },
    clearTempArr: (state) => {
      state.tempArr = [];
    },
  },
});

export const { updateCart, updateUserData, updateallProduct, clearTempArr } =
  cartSlice.actions;

export default cartSlice.reducer;
