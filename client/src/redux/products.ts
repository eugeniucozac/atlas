import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "./store";
import { ProductsSelectorType } from "../type";

export const initialState = {
  loading: false,
  hasErrors: false,
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state) => {
      state.loading = true;
    },
    getProductsSuccess: (state, { payload }) => {
      state.products = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getProductsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const fetchProducts = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getProducts());
    const response = await axios.get("http://localhost:5000/api/products");
    dispatch(getProductsSuccess(response.data));
  } catch (error) {
    dispatch(getProductsFailure());
  }
};

export const { getProducts, getProductsSuccess, getProductsFailure } =
  productsSlice.actions;

export const productsSelector = (state: ProductsSelectorType) => state.products;
export default productsSlice.reducer;
