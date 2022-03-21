import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "./products.type";

interface ProductsState {
  products: IProduct[];
  isLoading: boolean;
  error: string;
}

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: "",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {},
});
