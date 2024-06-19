import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  loading: boolean;
  error: any;
  currentUser: object | null;
}

const initialState: AuthState = {
  currentUser: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action:  PayloadAction<object>) => {
      state.loading = false;
      state.error = null;
      state.currentUser = action.payload;
    },
    loginFailure: (state, action:  PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    register: (state) => {
      state.loading = true;
    },
    // registerSuccess: (state, action) => {},
  },
});

export const { login, loginSuccess, loginFailure, register, registerSuccess } =
  authSlice.actions;

export default authSlice.reducer;
