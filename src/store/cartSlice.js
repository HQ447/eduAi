import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
  currStatus: "Home",
  showSidebar: false,
  activeUser: null,
  users: [
    {
      name: "ali",
      email: "ali@gmail.com",
      password: "ali123",
    },
  ],
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
    setactiveUser: (state, action) => {
      state.activeUser = action.payload;
    },
    //we will create user in db and then get the response and dispatch it in active user
    createUsers: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const {
  updateMode,
  updateCurrStatus,
  updateShowSidebar,
  setactiveUser,
  createUsers,
} = cartSlice.actions;

export default cartSlice.reducer;
