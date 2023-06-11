import axios from "axios";
import { store } from "../store";
// import { STORAGE_KEY } from "../constans";
import { authAction } from "../store/auth/authSlice";

// function getUserAuthLoginDataFromStorage() {
// const data = localStorage.getItem(STORAGE_KEY.AUTH);
// const userData = JSON.parse(data);
// console.log("userData", userData);
// return userData.token;
// return data.token;
// }
const BASE_URL =
  "http://ec2-18-197-107-37.eu-central-1.compute.amazonaws.com:5500/api/v1";

const headers = {
  "Content-Type": "application/json",
  // UserID: "AiymSunshine",
  // Authorization: getUserAuthLoginDataFromStorage(),
};

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers,
});

axiosInstance.interceptors.request.use(
  function configs(config) {
    const newConfig = {
      ...config,
      headers: {
        ...config.headers,
        Authorization: store.getState().auth.token,
      },
    };
    return newConfig;
  },
  function errorConfigs(error) {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  function responsees(response) {
    return response;
  },
  function cathError(error) {
    if (error.response.status === 401) {
      return store.dispatch(authAction.signOut());
    }
    return Promise.reject(error);
  }
);
