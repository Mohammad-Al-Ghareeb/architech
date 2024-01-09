import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chats: [],
    numberOfChats: 0,
  },
  reducers: {
    setChats(state, action) {
      state.chats = action.payload;
    },
    setNumberOfChats(state, action) {
      state.numberOfChats = action.payload;
    },
    removeChat(state, action) {
      const chatId = action.payload;
      state.chats = state.chats.filter((chat) => chat.id !== chatId);
      state.numberOfChats--;
    },
  },
});

const chatReducer = chatSlice.reducer;
const chatActions = chatSlice.actions;

export { chatActions, chatReducer };
