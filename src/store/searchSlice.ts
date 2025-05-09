import { createSlice } from "@reduxjs/toolkit";

/**
 * This is the initial state / initial state's value of the search slice.
 */
const initialState = {
  searchWord: "",
};

/**
 * This is the search slice of the redux store
 * and it is used to store every global search related data.
 * The search slice is created using the @see createSlice function from redux toolkit
 */
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchWord: (state, action) => {
      state.searchWord = action.payload;
    },
  },
});

// For type safety.
export type TSearchSliceState = typeof initialState;

// Exporting the search actions as a const variable.
export const searchActions = searchSlice.actions;

// The default export of this file that will
// return the reducer of the whole slice.
export default searchSlice.reducer;
