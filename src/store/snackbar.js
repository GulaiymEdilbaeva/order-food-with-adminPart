import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  severity: "",
  message: "",
  open: false,
};

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    doSuccess(state) {
      state.severity = "success";
      state.message = "Succesfully ";
      state.open = true;
    },
    doError(state) {
      state.severity = "error";
      state.message = "First you need to login or register";
      state.open = true;
    },
    closeSnackbar(state) {
      state.open = false;
    },
  },
});

export const snackbarAction = snackbarSlice.actions;
