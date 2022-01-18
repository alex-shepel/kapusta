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

const addExpense = createAsyncThunk(
  'transaction/add-expense',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await api.addExpense(credentials);
      return data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  },
);

const fetchExpense = createAsyncThunk(
  'transaction/get-expense',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.getExpense();
      return data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  },
);

const fetchCategories = createAsyncThunk(
  'transaction/get-categories',
  async (_, { rejectWithValue }) => {
    try {
      const income = await api.getIncomeCategories();
      const expense = await api.getExpenseCategories();
      return { categoriesIncome: income.data, categoriesExpense: expense.data };
    } catch (error) {
      console.log(error.response.data.message);
    }
  },
);

export { addIncome, fetchIncome, addExpense, fetchExpense, fetchCategories };
