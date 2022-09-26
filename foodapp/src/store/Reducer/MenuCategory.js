import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { menuCategory } from "../../Api/Api";
import axios from "axios";
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const MenuCategorySlice = createSlice({
  name: "menuCategory",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  extraReducers: (builder) => {
  
    builder
      .addCase(fetchMenuCategory.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchMenuCategory.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchMenuCategory.rejected, (state,action) => {
        state.status = STATUSES.ERROR;
        
        
      });
  },
});

export default MenuCategorySlice.reducer;

// Thunks
export const fetchMenuCategory = createAsyncThunk("menuCategory", async () => {
  const response = await axios.get("/menuCategory");
  return response.data;
});
