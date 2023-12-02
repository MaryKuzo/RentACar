import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65689af09927836bd9751fb7.mockapi.io/api/v1/";

export const setAdverts = createAsyncThunk(
  "catalog/fetchAdverts",
  async (page, thunkAPI) => {
    try {
      const res = await axios.get("/adverts", {
        params: { page: page, limit: 8 },
      });
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const setAllAdverts = createAsyncThunk(
  "catalog/fetchAllAdverts",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/adverts");
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);