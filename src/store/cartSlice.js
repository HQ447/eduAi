import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
  currStatus: "Home",
  showSidebar: false,
  activeUser: null,
  users: [
    {
      username: "ali",
      email: "ali123@gmail.com",
      password: "ali123",
      purchasedCourses: [], // Array of course IDs the user has purchased
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
    createUsers: (state, action) => {
      state.users.push(action.payload);
    },
    // Action to add a course to the purchasedCourses of activeUser
    purchaseCourse: (state, action) => {
      const courseId = action.payload;
      const user = state.users.find(
        (user) => user.email === state.activeUser.email
      );
      if (user && !user.purchasedCourses.includes(courseId)) {
        user.purchasedCourses.push(courseId); // Add the course ID to the purchasedCourses array
      }
    },
  },
});

export const {
  updateMode,
  updateCurrStatus,
  updateShowSidebar,
  setactiveUser,
  createUsers,
  purchaseCourse, // Export the purchaseCourse action
} = cartSlice.actions;

export default cartSlice.reducer;
