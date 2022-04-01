import { createSlice } from "@reduxjs/toolkit";

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import { IOrder } from "./order.type";

export const fetchOrder = createAsyncThunk(
  "order/fetchOrder",
  async (userId: string, thunkApi) => {
    try {
      const responce = await axios.get<IOrder[]>(
        `https://623df75fdf20a75d53c246ae.mockapi.io/orders?search=${userId}`
      );

      return responce.data;
    } catch (e) {
      return thunkApi.rejectWithValue("Error receiving order");
    }
  }
);

type OrderState = {
  order: IOrder[];
  isLoading: boolean;
  error: string;
};

const initialState: OrderState = {
  order: [],
  isLoading: false,
  error: "",
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOrder.pending.type]: (state) => {
      state.isLoading = false;
    },
    [fetchOrder.fulfilled.type]: (state, action: PayloadAction<IOrder[]>) => {
      state.order = action.payload;
      state.isLoading = true;
    },
    [fetchOrder.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default orderSlice.reducer;
