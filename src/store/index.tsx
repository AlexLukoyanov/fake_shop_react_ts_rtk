import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products/products.slice";
import categoriesSlice from "./categories/categories.slice";
import filteredProductsSlice from "./products/filtered.products.slice";
import productSlice from "./products/product.slice";
import cartSlice from "./cart/cart.slice";
import userSlice from "./user/userSlice";
import orderSlice from "./order/orderSlice";

export const store = configureStore({
  reducer: {
    productsSlice,
    categoriesSlice,
    filteredProductsSlice,
    productSlice,
    cartSlice,
    userSlice,
    orderSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
