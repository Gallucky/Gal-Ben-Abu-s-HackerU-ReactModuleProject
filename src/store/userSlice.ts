import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../types/user.t";
import { toast } from "react-toastify";

/**
 * This is the initial state / initial state's value of the user slice.
 */
const initialState = {
  // The user's data.
  user: null as TUser | null,
  isUserLoaded: false,

  // If the welcome back message has been displayed already.
  shownWelcomeBackMessage: false,
};

/**
 * This is the user slice of the redux store
 * and it is used to store every global user related data.
 * The user slice is created using the @see createSlice function from redux toolkit
 */
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Actions / methods / functions to update the state.
    login: (state, data) => {
      state.user = data.payload;
      state.isUserLoaded = true;
    },
    autoLogin: (state, data) => {
      state.user = data.payload;
      state.isUserLoaded = true;
      if (!state.shownWelcomeBackMessage) {
        toast.info("Welcome Back!");
        state.shownWelcomeBackMessage = true;
      }
    },
    logout: (state) => {
      state.user = null;
      state.isUserLoaded = true;
      localStorage.removeItem("token");
      toast.success("Signed out successfully!");
    },
    setUser: (state, data) => {
      state.user = data.payload;
      state.isUserLoaded = true;
      toast.success("User data updated successfully!");
    },
    unload: (state) => {
      state.isUserLoaded = false;
    },
  },
});

// For type safety.
export type TUserSliceState = typeof initialState;

// Exporting the user actions as a const variable.
export const userActions = userSlice.actions;

// The default export of this file that will
// return the reducer of the whole slice.
export default userSlice.reducer;
