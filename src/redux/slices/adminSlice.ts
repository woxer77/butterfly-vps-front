import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

import { API_URL } from "../../configs/config";
import apiClient from "../../configs/axios";
import { AdminResponse, IAdmin } from "../../ts/interfaces/types";

const initialState: IAdmin = {
  adminId: null,
  isAuth: false
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setAdminId: (state, action: PayloadAction<number>) => {
      state.adminId = action.payload;
    },
    resetAll: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
    builder.addCase(checkAuth.pending, (state) => {
      /*state.loading = true;
      state.error = '';*/
    });
    builder.addCase(checkAuth.fulfilled, (state, action) => {
      /*state.loading = false;
      state.error = '';*/
      state.isAuth = true;
      state.adminId = action.payload;
    });
    builder.addCase(checkAuth.rejected, (state, action) => {
      /*state.loading = false;
      state.error = action.error.message;*/
      state.isAuth = false;
      state.adminId = null;
    });
  }
});

export const checkAuth = createAsyncThunk(
  'admin/checkAuth',
  async () => {
    try {
      const response = await apiClient.get<AdminResponse>(`${API_URL}/admin/refresh`, { withCredentials: true });
      const { accessToken, admin } = response.data;

      localStorage.setItem('token', accessToken);

      return admin.adminId;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
);

export const {
  setAuth, setAdminId, resetAll
} = adminSlice.actions;

export default adminSlice.reducer;
