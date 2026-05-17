import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image:string;
  qty: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{
        id: number;
        title: string;
        price: number;
        image:string;
        qty:number
      }>
    ) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      // If item already exists
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.items.push({
          ...action.payload,
          qty: 1,
        });
      }
    },

    removeFromCart: (
      state,
      action: PayloadAction<number>
    ) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    updateQuantity: (
      state,
      action: PayloadAction<{
        id: number;
        qty: number;
      }>
    ) => {
      const item = state.items.find(
        (i) => i.id === action.payload.id
      );

      if (item) {
        item.qty = action.payload.qty;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;