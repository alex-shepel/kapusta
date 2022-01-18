import { createSlice } from '@reduxjs/toolkit';
import { register, login, refresh, logOut } from './operations';

const initialState = {
  accessToken: null,
  refreshToken: null,
  sid: null,
  isLoggedIn: false,
  isRegistration: false,
  isLogining: false,
  isRefreshing: false,
};

const resetState = state => {
  Object.keys(initialState).forEach(key => (state[key] = initialState[key]));
};
const loginStateUpd = (state, { accessToken, refreshToken, sid }) => {
  state.accessToken = accessToken;
  state.refreshToken = refreshToken;
  state.sid = sid;
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
      const { accessToken, refreshToken, sid } = payload;
      state.isLoggedIn = true;
      state.isRegistration = false;
      loginStateUpd(state, { accessToken, refreshToken, sid });
    },
    [register.rejected]: (state, { payload }) => {
      state.isRegistration = false;
    },

    [login.pending]: state => {
      state.isLogining = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      const { accessToken, refreshToken, sid } = payload;
      state.isLogining = false;
      state.isLoggedIn = true;
      loginStateUpd(state, { accessToken, refreshToken, sid });
    },
    [login.rejected]: (state, { payload }) => {
      state.isLogining = false;
    },
    [logOut.pending]: state => {
      state.isLogouting = true;
    },
    [logOut.fulfilled]: state => {
      resetState(state);
      state.isLogouting = false;
    },
    [logOut.rejected]: (state, { payload }) => {
      state.isLogouting = false;
    },
    [refresh.pending]: (state, { payload }) => {
      state.isRefreshing = true;
    },
    [refresh.fulfilled]: (state, { payload }) => {
      const {
        newAccessToken: accessToken,
        newRefreshToken: refreshToken,
        newSid: sid,
      } = payload;
      loginStateUpd(state, { accessToken, refreshToken, sid });
      state.isRefreshing = false;
    },
    [refresh.rejected]: (state, { payload }) => {
      state.isRefreshing = false;
    },
  },
});

export const { reducer: authReducer } = slice;
export const { resetAuthState } = slice.actions;
