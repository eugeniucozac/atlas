import { configureStore, Action } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ThunkAction } from "redux-thunk";
import productsReducer from "./products";
import cartReducer from "./cart";
import giftsReducer from "./gifts";
import taxesReducer from "./taxes";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    gifts: giftsReducer,
    taxes: taxesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
