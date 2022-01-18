import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'services/kapusta-api';

const addIncome = createAsyncThunk(
  'transaction/add-income',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await api.addIncome(credentials);
      return data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  },
);

const fetchIncome = createAsyncThunk(
  'transaction/get-income',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.getIncome();
      return data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  },
);

export { addIncome, fetchIncome };
