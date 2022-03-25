import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "./../products/products.type";

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
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
