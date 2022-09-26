import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { menuItems } from "../../Api/Api";
import axios from "axios";
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const MenuItemsSlice = createSlice({
  name: "menuItems",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  extraReducers: (builder) => {
  
    builder
      .addCase(fetchMenuItems.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchMenuItems.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchMenuItems.rejected, (state,action) => {
        state.status = STATUSES.ERROR;
        
        
      });
  },
});

export default MenuItemsSlice.reducer;

// Thunks
export const fetchMenuItems = createAsyncThunk("menuItems", async () => {
  const response = await axios.get("/menuItems");
  return response.data;
});
