import { createSlice } from "@reduxjs/toolkit";

export const Counterslice = createSlice({
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
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    handlereset: (state) => {
      state.value *= 0;
    },
  },
});
export const { increment, decrement, incrementByAmount, handlereset } =
  Counterslice.actions;
export default Counterslice.reducer;
