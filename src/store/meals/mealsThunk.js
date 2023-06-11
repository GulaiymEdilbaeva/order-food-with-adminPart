import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFoodsRequest } from "../../api/mealsService";

export const getFoods = createAsyncThunk(
  "meals/getMeals",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getFoodsRequest();
      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error?.response.message || "Something went wrong!"
      );
    }
  }
);
