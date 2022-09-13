import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { branches } from "../../Api/Api";
import axios from "axios";
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const branchSlice = createSlice({
  name: "branch",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBranches.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchBranches.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchBranches.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export default branchSlice.reducer;

// Thunks
export const fetchBranches = createAsyncThunk("branch/fetch", async () => {
  const response = await axios.get("/branches");
  return response.data;
});
