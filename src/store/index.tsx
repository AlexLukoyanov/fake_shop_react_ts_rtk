import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products/products.slice";
import categoriesSlice from "./categories/categories.slice";
import filteredProductsSlice from "./products/filtered.products.slice";

export const store = configureStore({
  reducer: {
    productsSlice,
    categoriesSlice,
    filteredProductsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
