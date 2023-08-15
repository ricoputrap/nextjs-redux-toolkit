import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [
    { id: 1, name: "John", email: "john@gmail.com", role: "Admin", status: "Active" },
    { id: 2, name: "Doe", email: "doe@gmail.com", role: "User", status: "Active" },
  ],
  reducers: {
    addUser: (state, action) => {
      state.push({
        ...action.payload,
        id: state.length + 1
      });
    }
  }
});

export default userSlice.reducer;
export const { addUser } = userSlice.actions;