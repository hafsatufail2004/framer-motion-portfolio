import { products } from "@/utils/mock";
import { Product } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface CounterState {
  value: number;
}

// Define the initial state using that type
const initialState: Product[] = products;

export const productSlice = createSlice({
  name: "product",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

export const {} = productSlice.actions;

export default productSlice.reducer;
