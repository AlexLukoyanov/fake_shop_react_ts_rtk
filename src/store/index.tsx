import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products/products.slice";
import categoriesSlice from "./categories/categories.slice";

export const store = configureStore({
  reducer: {
    productsSlice,
    categoriesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
