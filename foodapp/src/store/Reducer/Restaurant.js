import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { restaurant } from "../../Api/Api";
import axios from "axios";
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export default productSlice.reducer;

// Thunks
export const fetchProducts = createAsyncThunk("product/fetch", async () => {
  const response = await axios.get("/restaurant");
 
  return response.data;
});
