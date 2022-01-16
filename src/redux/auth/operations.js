import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'services/kapusta-api';

const Error = {
  AUTH_FAILED: 'Invalid email or password.',
  UNKNOWN: 'Unknown backend error occurred.',
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      await api.register(credentials);
      return await api.login(credentials);
    } catch (error) {
      return rejectWithValue(Error.UNKNOWN);
    }
  },
);

const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await api.login(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(Error.UNKNOWN);
    }
  },
);
const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    try {
      api.setToken(getState().auth.refreshToken);
      const { data } = await api.refresh({ sid: getState().auth.sid });
      api.setToken(data.newAccessToken);
      return data;
    } catch (error) {
      return rejectWithValue(Error.UNKNOWN);
    }
  },
);
const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      api.setToken('');
    } catch (error) {
      return rejectWithValue(Error.UNKNOWN);
    }
  },
);
export { register, login, refresh, logOut };
