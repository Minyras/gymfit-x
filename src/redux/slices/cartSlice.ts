// src/redux/slices/cartSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductItem } from "./productSlice";

interface CartItem extends ProductItem {
  quantity: number;
  selectedSize?: string;
}

interface CartState {
  items: CartItem[];
  showCart: boolean;
}

const initialState: CartState = {
  items: [],
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const existingItem = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.selectedSize === action.payload.selectedSize
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.showCart = true;
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    closeCart(state) {
      state.showCart = false;
    },

    clearCart(state) {
      state.items = [];
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increaseQty(state, action: PayloadAction<number>) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) item.quantity += 1;
    },

    decreaseQty(state, action: PayloadAction<number>) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
      else state.items = state.items.filter((i) => i.id !== action.payload);
    },
  },
});

export const {
  addToCart,
  toggleCart,
  closeCart,
  clearCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
} = cartSlice.actions;
export default cartSlice.reducer;
