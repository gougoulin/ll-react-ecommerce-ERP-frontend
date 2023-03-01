import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { isLogin: true, token: null as null | string };

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.isLogin = true;
      state.token = action.payload;
    },
    logout(state) {
      state = initialState;
    }
  }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
