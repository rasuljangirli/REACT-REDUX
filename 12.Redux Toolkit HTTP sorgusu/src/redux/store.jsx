import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "./usersSlice";

export const store = configureStore({
  
  reducer: {
    counter: counterReducer,
    users: userReducer,
  },
});
