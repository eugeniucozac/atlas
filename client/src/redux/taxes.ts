import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "./store";
import { TaxesSelectorType } from "../type";

export const initialState = {
  loading: false,
  hasErrors: false,
  taxes: [],
};

const taxesSlice = createSlice({
  name: "taxes",
  initialState,
  reducers: {
    getTaxes: (state) => {
      state.loading = true;
    },
    getTaxesSuccess: (state, { payload }) => {
      state.taxes = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getTaxesFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const fetchTaxes = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getTaxes());
    const response = await axios.get("http://localhost:5000/api/taxes");
    dispatch(getTaxesSuccess(response.data));
  } catch (error) {
    dispatch(getTaxesFailure());
  }
};

export const { getTaxes, getTaxesSuccess, getTaxesFailure } =
  taxesSlice.actions;

export const taxesSelector = (state: TaxesSelectorType) => state.taxes;
export default taxesSlice.reducer;
