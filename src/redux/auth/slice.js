import { createSlice } from '@reduxjs/toolkit';
import { register, login, refresh } from './operations';

const initialState = {
  // user: { email: null, password: null },
  accessToken: null,
  refreshToken: null,
  sid: null,
  isLoggedIn: false,
  isRegistration: false,
  isLogining: false,
};

const resetState = state => {
  Object.keys(initialState).forEach(key => (state[key] = initialState[key]));
};
const loginStateUpd = (state, { accessToken, refreshToken, sid }) => {
  // console.log(payload.data);
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
    [refresh.pending]: (state, { payload }) => {
      // console.log(payload);
    },
    [refresh.fulfilled]: (state, { payload }) => {
      const {
        newAccessToken: accessToken,
        newRefreshToken: refreshToken,
        newSid: sid,
      } = payload;
      loginStateUpd(state, { accessToken, refreshToken, sid });
    },
    [refresh.rejected]: (state, { payload }) => {
      // state.isLogining = false;
    },
  },
});

export const { reducer: authReducer } = slice;
export const { resetAuthState } = slice.actions;
