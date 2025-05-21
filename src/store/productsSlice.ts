import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../models/Product";

type ProductWithPreferite = Product & { preferite: boolean };

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    value: [] as ProductWithPreferite[],
  },
  reducers: {
    set: (state, action: PayloadAction<Product[]>) => {
      state.value = action.payload.map((item) => ({
        ...item,
        preferite: false,
      }));
    },
    addPreferite: (state, action: PayloadAction<number>) => {
      state.value = state.value.map((item) => ({
        ...item,
        preferite: action.payload === item.id ? true : item.preferite,
      }));
      console.log(state.value);
    },
    orderByPrice: (state) => {
      state.value = state.value.sort((a, b) => b.price - a.price);
    },
  },
});
export const { set, orderByPrice, addPreferite } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
