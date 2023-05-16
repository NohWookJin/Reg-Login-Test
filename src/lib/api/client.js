import axios from "axios";

// url export name instance
export const instance = axios.create({
  baseURL: "http://59.12.200.154",
});

function responseFulfilledInterceptor(res) {
  if (200 <= res.status && res.status < 300) {
    return res.data;
  }
  return Promise.reject(res.data);
}

function responseRejectedInterceptor(error) {
  return error;
}

instance.interceptors.response.use(
  responseFulfilledInterceptor,
  responseRejectedInterceptor
);
