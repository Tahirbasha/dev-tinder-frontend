import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../types/user";

const UserSlice = createSlice({
  name: "User",
  initialState: null as User | null,
  reducers: {
    addUser: (_state, action: { payload: User }) => {
      return action.payload;
    },
    removeUser: (_state) => {
      return null;
    },
  },
});

export default UserSlice.reducer;
export const { addUser, removeUser } = UserSlice.actions;
