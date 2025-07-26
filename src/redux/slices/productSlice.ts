import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface ProductItem {
  id: number;
  slug: string;
  name: string;
  price: number;
  oldPrice?: number;
  description: string;
  image: string;
  gallery?: string[];
  sizes?: string[];
  details?: {
    about?: string;
    quality?: string;
  };
}

interface ProductsState {
  items: ProductItem[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://gymfit-x.onrender.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return (await res.json()) as ProductItem[];
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Unknown error";
      });
  },
});

export default productSlice.reducer;

export const selectProductBySlug = (
  state: { products: ProductsState },
  slug: string
) => state.products.items.find((prd) => prd.slug === slug);
