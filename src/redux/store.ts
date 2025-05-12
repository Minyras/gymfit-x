import { configureStore } from "@reduxjs/toolkit";
import classesReducer from "./slices/classesSlice";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
const store = configureStore({
  reducer: {
    classes: classesReducer,
    products: productReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
