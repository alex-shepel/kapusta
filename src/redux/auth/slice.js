import { createSlice } from '@reduxjs/toolkit';
import { register, login, refresh, logOut, getUser } from './operations';

const initialState = {
  email: null,
  accessToken: null,
  refreshToken: null,
  sid: null,
  isLoggedIn: false,
  isRegistration: false,
  isLogining: false,
  error: null,
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
    setTokens: (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.sid = payload.sid;
      state.isLoggedIn = true;
    },
  },
  extraReducers: {
    [register.pending]: state => {
      state.isRegistration = true;
      state.error = null;
    },
    [register.fulfilled]: (state, { payload }) => {
      const { accessToken, refreshToken, sid, userData } = payload;
      state.isLoggedIn = true;
      state.isRegistration = false;
      state.email = userData.email;
      loginStateUpd(state, { accessToken, refreshToken, sid });
    },
    [register.rejected]: (state, { payload }) => {
      // console.log(payload);
      state.isRegistration = false;
      state.error = payload;
    },

    [login.pending]: state => {
      state.isLogining = true;
      state.error = null;
    },
    // login
    [login.fulfilled]: (state, { payload }) => {
      const { accessToken, refreshToken, sid, userData } = payload;
      state.isLogining = false;
      state.isLoggedIn = true;
      state.email = userData.email;
      loginStateUpd(state, { accessToken, refreshToken, sid });
    },
    [login.rejected]: (state, { payload }) => {
      state.isLogining = false;
      state.error = payload;
    },
    // logOut
    [logOut.pending]: state => {
      state.isLogouting = true;
      state.error = null;
    },
    [logOut.fulfilled]: state => {
      resetState(state);
      state.isLogouting = false;
    },
    [logOut.rejected]: (state, { payload }) => {
      state.isLogouting = false;
      state.error = payload;
    },
    // refresh
    [refresh.pending]: (state, _) => {
      state.isLogouting = true;
      state.error = null;
    },
    [refresh.fulfilled]: (state, { payload }) => {
      const {
        newAccessToken: accessToken,
        newRefreshToken: refreshToken,
        newSid: sid,
      } = payload;
      state.isLoggedIn = true;
      state.error = null;
      loginStateUpd(state, { accessToken, refreshToken, sid });
    },
    [refresh.rejected]: (state, { payload }) => {
      state.isLogining = false;
      state.error = payload;
    },
    // User
    [getUser.pending]: (state, { payload }) => {
      state.isLogouting = true;
      state.error = null;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      // console.log(payload.email);
      state.email = payload.email;
      state.isLoggedIn = true;
      state.error = null;
    },
    [getUser.rejected]: (state, { payload }) => {
      state.isLogining = false;
      state.error = payload;
    },
  },
});

export const { reducer: authReducer } = slice;
export const { setTokens, resetAuthState } = slice.actions;
