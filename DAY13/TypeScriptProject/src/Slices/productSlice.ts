import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;

  tags: string[];

  brand: string;
  sku: string;
  weight: number;

  dimensions: {
    width: number;
    height: number;
    depth: number;
  };

  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;

  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];

  returnPolicy: string;
  minimumOrderQuantity: number;

  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };

  images: string[];

  thumbnail: string;
}

interface ProductState {
  products: Product[];
  individualProduct:null|Product;
  status: "idle" | "loading" | "succeeded" | "failed";

  error: string | null;
}

interface ProductsApiResponse {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
  individualProduct:null,
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk<Product[]>(
  "products/fetchProducts",

  async () => {
    const res = await fetch("https://dummyjson.com/products");

    const data: ProductsApiResponse = await res.json();

    return data.products;
  },
);

export const fetchProductsDetail = createAsyncThunk(
  "products/fetchProductsDetail",
  async (id: string) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);

    const data = await res.json();

    return data;
  },
);

const productsSlice = createSlice({
  name: "products",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.products = action.payload;
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";

        state.error = action.error.message || "Failed to fetch data";
      })
      .addCase(fetchProductsDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsDetail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.individualProduct = action.payload;
      })

        .addCase(fetchProductsDetail.rejected, (state, action) => {
        state.status = "failed";

        state.error = action.error.message || "Failed to fetch data";
      })
  },
});

export default productsSlice.reducer;
