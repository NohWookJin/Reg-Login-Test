import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../lib/api/client";

export const register = createAsyncThunk(
  "auth/register",
  async (registerData) => {
    console.log(registerData);
    try {
      const response = await instance.post("auth/registration", registerData);
      return response.data;
    } catch (e) {
      throw new Error("failed");
    }
  }
);

const initialState = {
  register: {
    email: "",
    nick_name: "",
    password: "",
  },
  login: {
    email: "",
    password: "",
  },
  auth: null,
  authError: null,
  loading: false,
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
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, { payload: auth }) => {
      state.loading = false;
      state.auth = auth;
      state.authError = null;
    });
    builder.addCase(register.rejected, (state, { payload: error }) => {
      state.loading = false;
      state.auth = null;
      state.authError = error;
    });
  },
});

export const { changeField, InitializeForm } = authSlice.actions;
export default authSlice.reducer;
