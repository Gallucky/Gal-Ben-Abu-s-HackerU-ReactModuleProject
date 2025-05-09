import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../types/user.t";

/**
 * This is the initial state / initial state's value of the user slice.
 */
const initialState = {
  user: null as TUser | null,
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
    },
    logout: (state) => {
      state.user = null;
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
