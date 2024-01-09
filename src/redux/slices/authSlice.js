import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
    userId: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo")).id
      : null,
    success: false,
    isLogout: false,
    showSideBar: false,
  },
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.userId = action.payload.id;
    },
    logout(state) {
      state.user = null;
      state.userId = null;
    },
    loading(state) {
      state.success = !state.success;
    },
    setLogout(state) {
      state.isLogout = !state.isLogout;
    },
    setShowSideBar(state) {
      state.showSideBar = !state.showSideBar;
    },
  },
});

const authReducer = authSlice.reducer;
const authActions = authSlice.actions;

export { authActions, authReducer };
