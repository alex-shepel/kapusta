import { createSlice } from '@reduxjs/toolkit';
import { addIncome, fetchIncome } from './operations';

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
  },
});

export const { reducer: authReducer } = slice;
export const { resetAuthState } = slice.actions;
