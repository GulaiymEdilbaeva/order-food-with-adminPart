import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteMealRequest,
  // editMealRequest,
  postAdminRequest,
  // updateMealRequest,
} from "../../api/foodService";
import { getFoods } from "../meals/mealsThunk";
// import { Snackbar } from "../../lib/Snackbar";
import { snackbarAction } from "../snackbar";
// import { useDispatch } from "react-redux";
// const dispatch=useDispatch()
export const postAdminMeals = createAsyncThunk(
  "admin/postAdminMeals",
  async (payload, { dispatch, rejectWithValue }) => {
    console.log("payload: ", payload);
    try {
      const response = await postAdminRequest(payload);
      console.log("response: ", response);

      dispatch(getFoods());

      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deleteMeal = createAsyncThunk(
  "mealsAdmin/delete",
  async (id, { dispatch }) => {
    try {
      await deleteMealRequest(id);
      dispatch(
        snackbarAction({
          severity: "success",
          message: "delete",
        })
      );

      return dispatch(postAdminMeals);
    } catch (error) {
      dispatch(snackbarAction.doError());
    }
  }
);

// export const editMeal = createAsyncThunk(
//   "mealsAdmin/editMeal",
//   async (data, { dispatch, rejectWithValue }) => {
//     try {
//       await editMealRequest(data);
//       return dispatch(postAdminMeals());
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
