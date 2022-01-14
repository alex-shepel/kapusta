import { createSlice } from '@reduxjs/toolkit';
import { register, login } from './operations';

const initialState = {
  isLoggedIn: false,
};

const resetState = state => {
  Object.keys(initialState).forEach(key => (state[key] = initialState[key]));
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuthState: resetState,
  },
  extraReducers: {
    [register.pending]: state => {},
    [register.fulfilled]: (state, { payload }) => {},
    [register.rejected]: (state, { payload }) => {},

    [login.pending]: state => {},
    [login.fulfilled]: (state, { payload }) => {},
    [login.rejected]: (state, { payload }) => {},
  },
});

export const { reducer: authReducer } = slice;
export const { resetAuthState } = slice.actions;
