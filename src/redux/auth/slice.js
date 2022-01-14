import { createSlice } from '@reduxjs/toolkit';
import { register, login } from './operations';

const initialState = {
  user: { email: null, password: null },
  token: null,
  isLoggedIn: false,
  isRegistration: false,
  isLogining: false,
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
    [register.pending]: state => {
      state.isRegistration = true;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isRegistration = false;
    },
    [register.rejected]: (state, { payload }) => {
      state.isRegistration = false;
    },

    [login.pending]: state => {
      state.isLogining = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.isLogining = false;
    },
    [login.rejected]: (state, { payload }) => {
      state.isLogining = false;
    },
  },
});

export const { reducer: authReducer } = slice;
export const { resetAuthState } = slice.actions;
