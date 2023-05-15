import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  register: {
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
  },
  login: {
    email: "",
    password: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeField: (state, { payload: { form, key, value } }) => ({
      [form]: {
        ...state[form],
        [key]: value,
      },
    }),
    InitializeForm: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
  },
});

export const { changeField, InitializeForm } = authSlice.actions;
export default authSlice.reducer;
