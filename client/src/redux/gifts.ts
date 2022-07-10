import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "./store";
import { GiftsSelectorType } from "../type";

export const initialState = {
  loading: false,
  hasErrors: false,
  gifts: [],
};

const giftsSlice = createSlice({
  name: "gifts",
  initialState,
  reducers: {
    getGifts: (state) => {
      state.loading = true;
    },
    getGiftsSuccess: (state, { payload }) => {
      state.gifts = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getGiftsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const fetchGifts = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getGifts());
    const response = await axios.get("http://localhost:5000/api/gifts");
    dispatch(getGiftsSuccess(response.data));
  } catch (error) {
    dispatch(getGiftsFailure());
  }
};

export const { getGifts, getGiftsSuccess, getGiftsFailure } =
  giftsSlice.actions;

export const giftsSelector = (state: GiftsSelectorType) => state.gifts;
export default giftsSlice.reducer;
