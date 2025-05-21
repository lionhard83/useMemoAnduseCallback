import { createSlice } from "@reduxjs/toolkit";
// slice equivale ad un contesto
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    set: (state, action: { payload: number }) => {
      state.value = action.payload;
    },
  },
});
export const { increment, decrement, set } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
