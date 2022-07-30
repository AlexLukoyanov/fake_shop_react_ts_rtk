import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "./products.type";

export const fetchFilteredProducts = createAsyncThunk(
  "filteredProducts/fetchFilteredProducts",
  async (category: string, thunkAPI) => {
    try {
      const response = await axios.get<IProduct[]>(
        `https://fakestoreapi.com/products/category/${category}`
      );

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Error loading products");
    }
  }
);

interface ProductsState {
  filteredProducts: IProduct[];
  isLoading: boolean;
  error: string;
}

const initialState: ProductsState = {
  filteredProducts: [],
  isLoading: false,
  error: "",
};

export const filteredProductsSlice = createSlice({
  name: "filteredProducts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFilteredProducts.pending.type]: (state) => {
      state.isLoading = false;
    },
    [fetchFilteredProducts.fulfilled.type]: (
      state,
      action: PayloadAction<IProduct[]>
    ) => {
      state.filteredProducts = action.payload;
      state.isLoading = true;
    },
    [fetchFilteredProducts.pending.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default filteredProductsSlice.reducer;
