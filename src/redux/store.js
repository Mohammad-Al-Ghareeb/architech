import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { settingsReducer } from "./slices/settingsSlice";
import { chatReducer } from "./slices/chatSlice";
import { dashUserReducer } from "./slices/dashUserSlice";
import { appUserReducer } from "./slices/appUsersSlice";
import { centersReducer } from "./slices/centersSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    setting: settingsReducer,
    chat: chatReducer,
    dashUser: dashUserReducer,
    appUser: appUserReducer,
    center: centersReducer,
  },
});

export default store;
