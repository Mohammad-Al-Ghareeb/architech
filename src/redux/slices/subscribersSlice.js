import { createSlice } from "@reduxjs/toolkit";

const subscribersSlice = createSlice({
  name: "subscribers",
  initialState: {
    subscribers: [],
    codes: [],
    numberOfSubscribers: 0,
    isOpenedSubscriber: false,
    isOpenedUserToCourse: false,
    loading: false,
  },
  reducers: {
    setSubscribers(state, action) {
      state.subscribers = action.payload;
    },
    setCodes(state, action) {
      state.codes = action.payload;
    },
    setNumberOfSubscribers(state, action) {
      state.numberOfSubscribers = action.payload;
    },
    removeSubscriber(state, action) {
      const userId = action.payload;
      state.subscribers = state.subscribers.filter(
        (dashUser) => dashUser.id !== userId
      );
      state.numberOfAppUsers--;
    },
    setIsOpenedSubscribers(state) {
      state.isOpenedSubscriber = !state.isOpenedSubscriber;
    },
    setLoading(state) {
      state.loading = !state.loading;
    },
    setIsOpenedUserToCourse(state) {
      state.isOpenedUserToCourse = !state.isOpenedUserToCourse;
    },
  },
});

const subscribersReducer = subscribersSlice.reducer;
const subscribersAction = subscribersSlice.actions;

export { subscribersAction, subscribersReducer };
