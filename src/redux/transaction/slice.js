import { createSlice } from '@reduxjs/toolkit';
import {
  addIncome,
  fetchIncome,
  addExpense,
  fetchExpense,
  fetchCategories,
} from './operations';

const initialState = {
  incomes: [],
  expenses: [],
  monthStatsIncomes: {},
  monthStatsExpenses: {},
  categoriesIncome: [],
  categoriesExpense: [],
  isIncomeAdding: false,
  isIncomeLoading: false,
};

const resetState = state => {
  Object.keys(initialState).forEach(key => (state[key] = initialState[key]));
};

const slice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    resetAuthState: resetState,
  },
  extraReducers: {
    [addIncome.pending]: state => {
      state.isIncomeAdding = true;
    },
    [addIncome.fulfilled]: (state, { payload }) => {
      state.isIncomeAdding = false;
      state.incomes.push(payload);
    },
    [addIncome.rejected]: state => {
      state.isIncomeAdding = false;
    },

    [fetchIncome.pending]: state => {
      state.isIncomeLoading = false;
    },
    [fetchIncome.fulfilled]: (state, { payload }) => {
      state.isIncomeLoading = true;
      state.incomes = payload.incomes;
      state.monthStatsIncomes = payload.monthStats;
    },
    [fetchIncome.rejected]: state => {
      state.isIncomeLoading = false;
    },

    [addExpense.pending]: state => {
      state.isExpenseAdding = true;
    },
    [addExpense.fulfilled]: (state, { payload }) => {
      state.isExpenseAdding = false;
      state.expenses.push(payload);
    },
    [addExpense.rejected]: state => {
      state.isExpenseAdding = false;
    },

    [fetchExpense.pending]: state => {
      state.isExpenseLoading = false;
    },
    [fetchExpense.fulfilled]: (state, { payload }) => {
      state.isExpenseLoading = true;
      state.expenses = payload.expenses;
      state.monthStatsExpenses = payload.monthStats;
    },
    [fetchExpense.rejected]: state => {
      state.isExpenseLoading = false;
    },

    [fetchCategories.pending]: state => {
      state.areCategoriesLoading = false;
    },
    [fetchCategories.fulfilled]: (state, { payload }) => {
      state.areCategoriesLoading = true;
      state.categoriesIncome = payload.categoriesIncome;
      state.categoriesExpense = payload.categoriesExpense;
    },
    [fetchCategories.rejected]: state => {
      state.areCategoriesLoading = false;
    },
  },
});

export const { reducer: authReducer } = slice;
export const { resetAuthState } = slice.actions;
