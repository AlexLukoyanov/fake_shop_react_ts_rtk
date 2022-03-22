import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "./products.type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id: number, thunkAPI) => {
    try {
      const responce = await axios.get<IProduct>(
        `https://fakestoreapi.com/products/${id}`
      );

      return responce.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Error loading product");
    }
  }
);

type ProductType = {
  product: IProduct;
  isLoading: boolean;
  error: string;
};

const initialState: ProductType = {
  product: {} as IProduct,
  isLoading: false,
  error: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProduct.pending.type]: (state) => {
      state.isLoading = false;
    },
    [fetchProduct.fulfilled.type]: (state, action: PayloadAction<IProduct>) => {
      state.isLoading = true;
      state.product = action.payload;
      state.error = "";
    },
    [fetchProduct.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
