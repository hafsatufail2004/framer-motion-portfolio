import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/product";
import cartSlice from "./features/cart";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// ...

const presistConfig = {
  key: "roof",
  version: 1,
  storage,
};

const reducer = combineReducers({
  products: productSlice,
  cart: cartSlice,
});

const presistedReducer = persistReducer(presistConfig, reducer);

const store = configureStore({
  reducer: presistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
