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
      // console.log(credentials);
      const res = await api.register(credentials);
      console.log(res);
      const { data } = await api.login(credentials);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(Error.UNKNOWN);
    }
  },
);

const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      return await api.login(credentials);
    } catch (error) {
      return rejectWithValue(Error.UNKNOWN);
    }
  },
);

export { register, login };
