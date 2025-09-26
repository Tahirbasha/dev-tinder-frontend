import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./user-slice";
import FeedReducer from "./feed-slice";

export const store = configureStore({
  reducer: {
    User: UserReducer,
    Feed: FeedReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
