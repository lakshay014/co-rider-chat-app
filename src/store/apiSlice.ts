import { createSlice } from "@reduxjs/toolkit";

export interface chat {
  id: string;
  message: string;
  sender: { image: string; self: boolean };
  time: string;
}

export interface chats extends Array<chat> {}

export interface ApiState {
  chats: chats;
  loading: boolean;
}

const initialState: ApiState = {
  chats: [],
  loading: false,
};

export const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    updateChats: (state, action) => {
      state.chats = state.chats.concat(action.payload);
    },
  },
});

export const { updateChats } = apiSlice.actions;
export default apiSlice.reducer;
