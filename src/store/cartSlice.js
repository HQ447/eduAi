import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
  currStatus: "Home",
  showSidebar: false,
  activeUser: null,

  //the user willbe added in database and after getting all userData from Api ,
  //  dispatch and replace it with that user array to prevent multiple api calls
  //its just for demo to login into user account this authentication will be processed in backend

  users: [
    {
      username: "ali",
      email: "ali@gmail.com",
      password: "ali",
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
