import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IServiceShortInfo } from "../../ts/interfaces/types";

interface IUserSlice {
  webp: boolean;
  services: IServiceShortInfo[];
}

const initialState: IUserSlice = {
  webp: false,
  services: []
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setWebp: (state, action: PayloadAction<boolean>) => {
      state.webp = action.payload;
    },
    setServices: (state, action: PayloadAction<IServiceShortInfo[]>) => {
      state.services = action.payload;
    },
    resetAll: () => initialState
  }
});

export const {
  setWebp, setServices, resetAll
} = userSlice.actions;

export default userSlice.reducer;
