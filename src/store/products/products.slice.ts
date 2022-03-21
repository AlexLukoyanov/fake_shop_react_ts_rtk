import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "./products.type";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (limit: number, thunkAPI) => {
    try {
      const responce = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products",
        { params: { limit: limit } }
      );
    } catch (e) {}
  }
);

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

export default productsSlice.reducer;
