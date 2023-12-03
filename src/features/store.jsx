import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./carts/cartSlice";

export const store = configureStore({
  reducer: {
    allCart: cartReducer,
  },
});
