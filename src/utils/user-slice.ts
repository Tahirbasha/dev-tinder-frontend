import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "User",
  initialState: null,
  reducers: {
    addUser: (_state, action) => {
      return action.payload;
    },
    removeUser: (_state, _action) => {
      return null;
    },
  },
});

export default UserSlice.reducer;
export const { addUser, removeUser } = UserSlice.actions;
