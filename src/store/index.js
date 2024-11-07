// src/store/index.js

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    // other reducers if any
  },
});
