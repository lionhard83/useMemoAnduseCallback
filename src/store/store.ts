import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./productsSlice";
import { counterReducer } from "./counterSlice";
import { themeReducer } from "./themeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer, // contesto
    theme: themeReducer, // contesto
    products: productsReducer,
  },
});
export type State = ReturnType<typeof store.getState>;
