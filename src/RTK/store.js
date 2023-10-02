import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./Slices/ProductsSlice";
import cartSlice from "./Slices/cartSlice";
import detailsSlice from "./Slices/detailsSlice";

export const store = configureStore({
  reducer: {
    products: ProductsSlice,
    cart: cartSlice,
    details: detailsSlice
  }
})
