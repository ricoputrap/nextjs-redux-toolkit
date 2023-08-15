import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [
    { id: 1, name: "John", email: "john@gmail.com", role: "Admin", status: "Active" },
    { id: 2, name: "Doe", email: "doe@gmail.com", role: "User", status: "Active" },
  ],
  reducers: {}
});

export default userSlice.reducer;