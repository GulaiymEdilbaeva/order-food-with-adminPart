import { axiosInstance } from "../config/axios";

export const signUp = (data) => {
  return axiosInstance.post("/auth/register", data);
};

export const signIn = (data) => {
  return axiosInstance.post("/auth/login", data);
};
