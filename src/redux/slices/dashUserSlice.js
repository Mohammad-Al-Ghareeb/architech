import { createSlice } from "@reduxjs/toolkit";

const dashUserSlice = createSlice({
  name: "dash-user",
  initialState: {
    dashUsers: [],
    numberOfDashUsers: 0,
    isOpenedDash: false,
    loading: false,
  },
  reducers: {
    setDashUsers(state, action) {
      state.dashUsers = action.payload;
    },
    setNumberOfDashUsers(state, action) {
      state.numberOfDashUsers = action.payload;
    },
    removeDashUser(state, action) {
      const userId = action.payload;
      state.dashUsers = state.dashUsers.filter(
        (dashUser) => dashUser.id !== userId
      );
      state.numberOfDashUsers--;
    },
    setIsOpenedDash(state) {
      state.isOpenedDash = !state.isOpenedDash;
    },
    setLoading(state) {
      state.loading = !state.loading;
    },
  },
});

const dashUserReducer = dashUserSlice.reducer;
const dashUserActions = dashUserSlice.actions;

export { dashUserActions, dashUserReducer };
