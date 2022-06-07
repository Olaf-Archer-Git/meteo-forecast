import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  login: "",
  password: "",
  confirm: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setLogin: (state, action) => {
      state.login = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirm: (state, action) => {
      state.confirm = action.payload;
    },
  },
});

export const { setName, setLogin, setPassword, setConfirm } = authSlice.actions;
export default authSlice.reducer;
