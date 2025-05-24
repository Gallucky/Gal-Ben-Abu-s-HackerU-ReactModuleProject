import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  // All of the reduces / slices that are part of the whole bigPie.
  reducer: { userSlice, searchSlice },
  devTools: import.meta.env.MODE !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // This is to avoid the error of serializable check.
      // The errors it will avoid is relevant of classes and other typescript
      // features that in javascript they are not supported fully.
      serializableCheck: false,
    }), // This is where we will add our middleware
});

// This is the root reducer containing all of the reducers as one reducer.
const RootReducer = combineReducers({ userSlice, searchSlice });

// This exported type is the root type containing all of the rules and attributes of all the slice's types.
export type TRootState = ReturnType<typeof RootReducer>;

// This is the store of the redux also known as: bigPie.
export default store;
