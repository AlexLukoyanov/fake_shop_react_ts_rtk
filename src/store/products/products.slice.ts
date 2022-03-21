import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
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

      return responce.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Error loading products");
    }
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
  extraReducers: {
    [fetchProducts.pending.type]: (state) => {
      state.isLoading = false;
    },
    [fetchProducts.fulfilled.type]: (
      state,
      action: PayloadAction<IProduct[]>
    ) => {
      state.products = action.payload;
      state.isLoading = true;
    },
    [fetchProducts.pending.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default productsSlice.reducer;
