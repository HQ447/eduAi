// src/store/index.js

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

export default configureStore({
  reducer: {
    store: cartReducer,
    // other reducers if any
  },
});
