import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { restaurantCategory } from "../../Api/Api";
import axios from "axios";
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const restaurantCategorySlice = createSlice({
  name: "category",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchrestaurantCategory.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchrestaurantCategory.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchrestaurantCategory.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export default restaurantCategorySlice.reducer;

// Thunks
export const fetchrestaurantCategory = createAsyncThunk(
  "category",
  async () => {
    const response = await axios.get("/restaurantCategory");
   
    return response.data;
  }
);
