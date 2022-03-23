import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "./../products/products.type";

const initialState: IProduct[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
