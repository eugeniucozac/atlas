import { createSlice, createSelector } from "@reduxjs/toolkit";
import { CartType, CartSelectorType } from "../type";

export const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state: any, { payload }) => {
      let itemExist = state.items?.find(
        (item: CartType) => payload._id === item._id
      );
      if (itemExist) {
        delete itemExist.type;
        delete itemExist.gift;
        itemExist.quantity += 1;
        itemExist.price = itemExist.price + payload.price + payload?.gift;
      } else {
        state.items.push({
          _id: payload._id,
          name: payload.name,
          price: payload.price + payload?.gift,
          src: payload.src,
          quantity: 1,
        });
      }
    },
    remove: (state, { payload }) => {
      state.items = state.items.filter(
        (product: CartType) => product._id !== payload._id
      );
    },
  },
});

export const { add, remove } = cartSlice.actions;
export const itemsSelector = (state: CartSelectorType) => state.cart;

export const totalSelector = createSelector([itemsSelector], (cart) =>
  cart.items.reduce((total, current) => (total += current.price), 0)
);

export const quantitySelector = createSelector([itemsSelector], (cart) =>
  cart.items.reduce((total, current) => (total += current.quantity), 0)
);

export default cartSlice.reducer;
