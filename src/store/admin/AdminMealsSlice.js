import { createSlice } from "@reduxjs/toolkit";
import { deleteMeal, postAdminMeals } from "./adminMealsThunk";
import { snackbarAction } from "../snackbar";
// import { useDispatch } from "react-redux";

const initialState = {
  meals: [],
  newMeal: {},
  isLoading: false,
};

export const mealsAdminSlice = createSlice({
  name: "mealsAdmin",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(postAdminMeals.fulfilled, (state, action) => {
      state.meals = action.payload;
    });
    builder.addCase(deleteMeal, (state) => {
      state.isLoading = false;
      //   dispatch(snackbarAction.doSuccess());
    });
    builder.addCase(updateMeal.fulfilled, (state, action) => {
      state.newMeal = action.payload;
    });
  },
});
export const mealsAdminActions = mealsAdminSlice.actions;
