import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../lib/api/client";
import { handleAsyncAction } from "./utils/helper";

export const register = createAsyncThunk(
  "auth/register",
  async (registerData) => {
    console.log(registerData);
    try {
      const response = await instance.post("auth/registration", registerData);
      if (response) {
        return registerData;
      }
    } catch (e) {
      throw new Error("register failed");
    }
  }
);

// 회원가입시 이메일 중복 확인
export const userCheck = createAsyncThunk("auth/userCheck", async (auth) => {
  try {
    const response = await instance.get(`accounts/${auth.email}`);
    console.log(typeof auth.email);
    console.log(response);

    if (response) {
      return auth;
    }
  } catch (e) {
    throw new Error("authCheck error");
  }
});

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
  loading: false,
  auth: null,
  authError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeField: (state, { payload: { form, key, value } }) => {
      state[form][key] = value;
    },
    InitializeForm: (state, { payload: form }) => {
      state[form] = initialState[form];
    },
  },
  extraReducers: (builder) => {
    handleAsyncAction(builder, register, "auth");
    handleAsyncAction(builder, userCheck, "auth");
  },
});

export const { changeField, InitializeForm } = authSlice.actions;
export default authSlice.reducer;
