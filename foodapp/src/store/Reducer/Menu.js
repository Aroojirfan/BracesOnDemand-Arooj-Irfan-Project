import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { menu } from "../../Api/Api";
import axios from "axios";
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchMenu.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export default menuSlice.reducer;

// Thunks
export const fetchMenu = createAsyncThunk("menu/fetch", async () => {
  const response = await axios.get("/menu");
  return response.data;
});
