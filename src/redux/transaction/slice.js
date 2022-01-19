import { createSlice } from '@reduxjs/toolkit';
import {
  addIncome,
  fetchIncome,
  addExpense,
  fetchExpense,
  fetchCategories,
  removeTransaction,
  fetchDataByCategories,
  updateBalance,
} from './operations';

const initialState = {
  balance: 0,
  incomes: [],
  expenses: [],
  monthStatsIncomes: {},
  monthStatsExpenses: {},
  categoriesIncome: [],
  categoriesExpense: [],
  isIncomeAdding: false,
  isIncomeLoading: false,
  isExpenseAdding: false,
  isExpenseLoading: false,
  areCategoriesLoading: false,
  isRemoving: false,
  isDataGettingByCategories: false,
  dataByCategories: [],
  date: null,
};

const resetState = state => {
  Object.keys(initialState).forEach(key => (state[key] = initialState[key]));
};

const slice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    resetAuthState: resetState,
    changeDate: (state, { payload }) => {
      state.date = payload;
    },
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
      state.isIncomeLoading = true;
    },
    [fetchIncome.fulfilled]: (state, { payload }) => {
      state.isIncomeLoading = false;
      state.incomes = payload.incomes;
      state.monthStatsIncomes = payload.monthsStats;
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
      state.isExpenseLoading = true;
    },
    [fetchExpense.fulfilled]: (state, { payload }) => {
      state.isExpenseLoading = false;
      state.expenses = payload.expenses;
      state.monthStatsExpenses = payload.monthsStats;
    },
    [fetchExpense.rejected]: state => {
      state.isExpenseLoading = false;
    },

    [fetchCategories.pending]: state => {
      state.areCategoriesLoading = true;
    },
    [fetchCategories.fulfilled]: (state, { payload }) => {
      state.areCategoriesLoading = false;
      state.categoriesIncome = payload.categoriesIncome;
      state.categoriesExpense = payload.categoriesExpense;
    },
    [fetchCategories.rejected]: state => {
      state.areCategoriesLoading = false;
    },

    [removeTransaction.pending]: state => {
      state.isRemoving = true;
    },
    [removeTransaction.fulfilled]: (state, { payload }) => {
      state.isRemoving = false;
      state.incomes = state.incomes.filter(item => item._id !== payload);
      state.expenses = state.expenses.filter(item => item._id !== payload);
    },
    [removeTransaction.rejected]: state => {
      state.isRemoving = false;
    },

    [fetchDataByCategories.pending]: state => {
      state.isDataGettingByCategories = true;
    },
    [fetchDataByCategories.fulfilled]: (state, { payload }) => {
      state.isDataGettingByCategories = false;
      state.dataByCategories = payload;
    },
  },
});

export const { reducer: transactionReducer } = slice;
export const { resetAuthState, changeDate } = slice.actions;
