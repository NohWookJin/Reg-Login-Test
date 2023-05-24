import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance, saveAccessToken } from "../lib/api/client";
import { loginAsyncAction } from "./utils/helper";
import { useCookies } from "react-cookie";

export const login = createAsyncThunk("user/login", async (loginData) => {
  console.log(loginData);
  console.log("login...");
  try {
    const response = await instance.post("/auth/login", loginData);
    if (response) {
      console.log(response);
      // 추후 처리
    }
    return response;
  } catch (e) {
    throw new Error("login failed");
  }
});

export const refresh = createAsyncThunk("user/refresh", async () => {
  try {
    const res = await instance.post("/auth/refresh", {});
    if (res) {
      console.log(res);
    }
    return res;
  } catch (e) {
    throw new Error("refresh failed");
  }
});

const initialState = {
  loading: null,
  user: null,
  userError: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // user값 확인(추후 토큰 값 확인 용도)
    tempSetUser: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    loginAsyncAction(builder, login, "user");
  },
});

export const { logout, tempSetUser } = userSlice.actions;
export default userSlice.reducer;
