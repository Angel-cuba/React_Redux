import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/UserReducers";



export const store = configureStore({
  reducer: {
    items: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;