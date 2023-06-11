import { axiosInstance } from "../config/axios";

export const getFoodsRequest = () => {
  return axiosInstance.get("/foods");
};

export const getBasketRequest = () => {
  return axiosInstance.get("/basket");
};

export const addToBasketRequest = (payload) => {
  return axiosInstance.post(`/foods/${payload.id}/addToBasket`, {
    amount: payload.amount,
    token: payload.token,
  });
};

export const incrementBasketRequest = (id, basketAmaount) => {
  return axiosInstance.put(`/basketItem/${id}/update`, {
    amount: basketAmaount + 1,
  });
};

export const decrementBasketRequest = (id, basketAmaount) => {
  return axiosInstance.put(`/basketItem/${id}/update`, {
    amount: basketAmaount,
  });
};

export const deleteBasketRequest = (id) => {
  return axiosInstance.delete(`/basketItem/${id}/delete`);
};
