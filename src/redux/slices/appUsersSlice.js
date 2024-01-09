import { createSlice } from "@reduxjs/toolkit";

const appUsersSlice = createSlice({
  name: "app-user",
  initialState: {
    appUsers: [],
    numberOfAppUsers: 0,
    isOpenedApp: false,
    loading: false,
  },
  reducers: {
    setAppUsers(state, action) {
      state.appUsers = action.payload;
    },
    setNumberOfAppUsers(state, action) {
      state.numberOfAppUsers = action.payload;
    },
    removeAppUser(state, action) {
      const userId = action.payload;
      state.appUsers = state.appUsers.filter(
        (dashUser) => dashUser.id !== userId
      );
      state.numberOfAppUsers--;
    },
    setIsOpenedApp(state) {
      state.isOpenedApp = !state.isOpenedApp;
    },
    setLoading(state) {
      state.loading = !state.loading;
    },
  },
});

const appUserReducer = appUsersSlice.reducer;
const appUserAction = appUsersSlice.actions;

export { appUserAction, appUserReducer };
