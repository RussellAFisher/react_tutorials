import {configureStore} from "@reduxjs/toolkit";
import {usersReducer} from "./slices/usersSlice";

export const store = configureStore({
   reducer: {
       users: usersReducer
   }
});

export * from "./thunks/getUsers";
export * from "./thunks/postUser";
export * from "./thunks/deleteUser";