import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addresses } from "../../Api/Api";
import axios from "axios";
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const addressSlice = createSlice({
  name: "address",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  extraReducers: (builder) => {
  
    builder
      .addCase(fetchAddresses.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchAddresses.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchAddresses.rejected, (state,action) => {
        state.status = STATUSES.ERROR;
        
        
      });
  },
});

export default addressSlice.reducer;

// Thunks
export const fetchAddresses = createAsyncThunk("address", async () => {
  const response = await axios.get("/addresses");
  return response.data;
});
