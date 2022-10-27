import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./listSlice";

export const store = configureStore({
  reducer: {
    list: listReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type rootState = ReturnType<typeof store.getState>;
