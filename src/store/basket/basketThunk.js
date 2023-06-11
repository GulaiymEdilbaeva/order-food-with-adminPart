import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  decrementBasketRequest,
  deleteBasketRequest,
  incrementBasketRequest,
} from "../../api/mealsService";
import { getBasketRequest } from "../../api/mealsService";
import { addToBasketRequest } from "../../api/mealsService";

export const getBasket = createAsyncThunk(
  "basket/getBasket",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getBasketRequest();
      const { data } = response?.data;
      return data.items;
    } catch (error) {
      return rejectWithValue(
        error?.response?.message || "Something went wrong!"
      );
    }
  }
);

export const addItem = createAsyncThunk(
  "basket/addItem",
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      await addToBasketRequest(payload);

      dispatch(getBasket());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const incrementFood = createAsyncThunk(
  "basket/increment",
  async ({ amount, id }, { rejectWithValue, dispatch }) => {
    try {
      const response = await incrementBasketRequest(id, amount);

      dispatch(getBasket());

      return await response.items;
    } catch (error) {
      return rejectWithValue(
        error?.response?.message || "Something went wrong!"
      );
    }
  }
);

export const decrementFood = createAsyncThunk(
  "basket/decrement",
  async (payload, { rejectWithValue, dispatch }) => {
    if (payload.amount !== 0) {
      console.log("amount: ", payload.amount);
      try {
        const response = await decrementBasketRequest(
          payload.id,
          payload.amount
        );

        dispatch(getBasket());

        return await response.items;
      } catch (error) {
        return rejectWithValue(
          error?.response?.message || "Something went wrong!"
        );
      }
    } else {
      try {
        const response = await deleteBasketRequest(payload.id);
        console.log("deleteBasketRequest: ");

        dispatch(getBasket());

        return await response.items;
      } catch (error) {
        return rejectWithValue(
          error?.response?.message || "Something went wrong!"
        );
      }
    }
  }
);
