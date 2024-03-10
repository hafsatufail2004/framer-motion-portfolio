import { Cart } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface CounterState {
  value: number;
}

// Define the initial state using that type
const initialState: Cart[] = [];

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // add to cart funcationality
    addtoCart(state, action) {
      let uuid = Math.floor(1000 + Math.random() * 9000);
      let newObj = { ...action.payload, uuid };
      state.push(newObj);
    },
    // delete from cart
    delItem(state, { payload }) {
      return state.filter((val) => val.uuid !== payload);
    },
    // addition of item
    addItemToCart(state, action) {
      let obj = state.find(
        (val) =>
          val.id == action.payload.id &&
          val.color == action.payload.color &&
          val.size == action.payload.size
      );
      if (obj) {
        ++obj.quantity;
        let newState = state.filter((val) => val.id !== obj?.id);
        state = [...newState, obj];
        return;
      }
    },
    // subtraction of items
    subtractCart(state, action) {
      let obj = state.find(
        (val) =>
          val.id == action.payload.id &&
          val.color == action.payload.color &&
          val.size == action.payload.size
      );
      if (obj !== undefined) {
        if (obj.quantity <= 1) {
          return state.filter((val) => val.uuid !== obj?.uuid);
        }
        --obj.quantity;
        let newState = state.filter((val) => val.uuid == obj?.uuid);
        state = [...newState, obj];
        return;
      }
    },
  },
});

export const { addtoCart, delItem, addItemToCart, subtractCart } =
  cartSlice.actions;

export default cartSlice.reducer;
