import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    who: "",
    privacy: "",
    loading: false,
  },
  reducers: {
    setWho(state, action) {
      state.who = action.payload;
    },
    setPrivacy(state, action) {
      state.privacy = action.payload;
    },
    setLoading(state) {
      state.loading = !state.loading;
    },
  },
});

const settingsReducer = settingsSlice.reducer;
const settingsActions = settingsSlice.actions;

export { settingsActions, settingsReducer };
