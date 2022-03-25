import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "./../products/products.type";
import axios from "axios";

export const postOrder = createAsyncThunk(
  "cart/postOrder",
  async (order: CartState, thunkApi) => {
    try {
      await axios.post(
        "https://623df75fdf20a75d53c246ae.mockapi.io/order",
        order
      );

      thunkApi.dispatch(sendOrder());
    } catch (e) {
      return thunkApi.rejectWithValue("Уrror sending order");
    }
  }
);

interface CartState {
  products: IProduct[];
  totalPrice: number;
}

const initialState: CartState = {
  products: localStorage.getItem("cartProducts")
    ? JSON.parse(localStorage.getItem("cartProducts") || "")
    : [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      state.products.push({
        ...action.payload,
        quantity: 1,
        total: action.payload.price,
      });

      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },
    incrementProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity + 1,
              total: item.price * (item.quantity + 1),
            }
          : item
      );

      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },
    decrementProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity - 1,
              total: item.price * (item.quantity - 1),
            }
          : item
      );

      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },

    getTotalPrice: (state) => {
      state.totalPrice = state.products.reduce(
        (acc, item) => (acc += item.total),
        0
      );

      return state;
    },
    sendOrder: (state) => {
      state.products = [];
      localStorage.setItem("cartItems", JSON.stringify(state));
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  incrementProduct,
  decrementProduct,
  getTotalPrice,
  sendOrder,
} = cartSlice.actions;
export default cartSlice.reducer;
