import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        state.carts = [...state.carts, temp];
      }
    },

    // remove particular item
    removeCart: (state, action) => {
      const data = state.carts.filter((item) => item.id !== action.payload);
      state.carts = data;
    },
    // increment and decrement qnty
    incrementCart: (state, action) => {
      const itemIndexInc = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndexInc >= 0) {
        state.carts[itemIndexInc].qnty += 1;
      }
    },
    decrementCart: (state, action) => {
      const itemIndexDec = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.carts[itemIndexDec].qnty >= 1) {
        state.carts[itemIndexDec].qnty -= 1;
      }
    },

    // clear carts
    emptyCarts: (state) => {
      state.carts = [];
    },
  },
});

export const {
  addToCart,
  removeCart,
  emptyCarts,
  incrementCart,
  decrementCart,
} = cartSlice.actions;

export default cartSlice.reducer;
