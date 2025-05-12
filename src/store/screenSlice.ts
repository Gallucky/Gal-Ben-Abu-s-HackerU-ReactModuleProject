import { createSlice } from "@reduxjs/toolkit";
import { ViewMode } from "../enums/ViewModes.Enum";

/**
 * This is the initial state / initial state's value of the screen slice.
 */
const initialState = {
  viewSize: ViewMode.PCAndLarger,
};

/**
 * This is the screen slice of the redux store
 * and it is used to store every global screen related data.
 * The screen slice is created using the @see createSlice function from redux toolkit
 */
const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    setViewMode: (state, action) => {
      state.viewSize = action.payload;
    },
  },
});

// For type safety.
export type TScreenSliceState = typeof initialState;

// Exporting the screen actions as a const variable.
export const searchActions = screenSlice.actions;

// The default export of this file that will
// return the reducer of the whole slice.
export default screenSlice.reducer;
