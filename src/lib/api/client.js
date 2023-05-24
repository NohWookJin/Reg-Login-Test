import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

let accessToken;

export const saveAccessToken = (token) => {
  accessToken = token;
};

function requestInterceptor(config) {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  console.log("요청: ", config);

  return config;
}

function responseFulfilledInterceptor(response) {
  if (200 <= response.status && response.status < 300) {
    console.log("응답 수신: ", response);
    return response;
  }
  return Promise.reject(response);
}

function responseRejectedInterceptor(error) {
  return Promise.reject(error);
}

instance.interceptors.request.use(requestInterceptor);
instance.interceptors.response.use(
  responseFulfilledInterceptor,
  responseRejectedInterceptor
);

instance.defaults.headers.common["Accept"] = "application/json";
