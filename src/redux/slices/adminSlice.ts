import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { API_URL } from "../../configs/config";
import apiClient from "../../configs/axios";
import { IAdmin } from "../../ts/interfaces/types";

interface AdminResponse {
  adminId: number;
}

interface RefreshResponse {
  accessToken: string;
  refreshToken: string;
  admin: AdminResponse;
}

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
  }
});

export const checkAuth = createAsyncThunk(
  'admin/checkAuth',
  async () => {
    try {
      const response = await apiClient.get<RefreshResponse>(`${API_URL}/admin/refresh`, { withCredentials: true });
      const { accessToken, admin } = response.data;

      localStorage.setItem('token', accessToken);

      return admin;
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
