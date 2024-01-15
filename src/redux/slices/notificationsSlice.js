import { createSlice } from "@reduxjs/toolkit";

const notificationsSlice = createSlice({
  name: "notification",
  initialState: {
    notifications: [
      // {
      //   id: "58a42284-a7f2-4384-5589-08dc096406fc",
      //   name: "string",
      //   title: "string",
      //   message: "string",
      //   createdAt: "about 2 weeks ago",
      // },
      // {
      //   id: "58a42284-a7f2-4384-2d89-08dc096406fc",
      //   name: "string",
      //   title: "string",
      //   message: "string",
      //   createdAt: "about 2 weeks ago",
      // },
      // {
      //   id: "58a42284-a7f2-4384-7389-08dc096406fc",
      //   name: "string",
      //   title: "string",
      //   message: "string",
      //   createdAt: "about 2 weeks ago",
      // },
    ],
    numberOfNotifications: 0,
    isOpenedNotifications: false,
    loading: false,
  },

  reducers: {
    setNotifications(state, action) {
      state.notifications = action.payload;
    },
    setNumberOfNotifications(state, action) {
      state.numberOfNotifications = action.payload;
    },
    removeNotifications(state, action) {
      const noti = action.payload;
      state.notifications = state.notifications.filter(
        (not) => not.id !== noti
      );
      state.numberOfAppUsers--;
    },
    setIsOpenedNotifications(state) {
      state.isOpenedNotifications = !state.isOpenedNotifications;
    },
    setLoading(state) {
      state.loading = !state.loading;
    },
  },
});

const notificationsReducer = notificationsSlice.reducer;
const notificationsAction = notificationsSlice.actions;

export { notificationsAction, notificationsReducer };
