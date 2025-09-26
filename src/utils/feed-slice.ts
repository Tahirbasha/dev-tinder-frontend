import { createSlice } from "@reduxjs/toolkit";

const FeedSlice = createSlice({
  name: "FeedSlice",
  initialState: null,
  reducers: {
    addUsersToFeed: (state, action) => {
      return action.payload;
    },
    removeUsersFromFeed: (state, action) => {
      return null;
    },
  },
});

export default FeedSlice.reducer;
export const { addUsersToFeed, removeUsersFromFeed } = FeedSlice.actions;
