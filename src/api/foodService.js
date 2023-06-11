import { axiosInstance } from "../config/axios";

export const postAdminRequest = (data) => {
  return axiosInstance.post(`foods`, data);
};

export const deleteMealRequest = (id, data) => {
  return axiosInstance.delete(`foods/${id}`, data);
};

// export const editMealRequest = (data) => {
//   return axiosInstance.put(`/foods/${data.id}`, data.editData);
// };
