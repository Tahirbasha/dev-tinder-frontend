import { createSlice } from "@reduxjs/toolkit";

const FeedSlice = createSlice({
  name: "FeedSlice",
  initialState: null,
  reducers: {
    addUsersToFeed: (_state, action) => {
      return action.payload;
    },
    removeUsersFromFeed: (_state, _action) => {
      return null;
    },
  },
});

export default FeedSlice.reducer;
export const { addUsersToFeed, removeUsersFromFeed } = FeedSlice.actions;
