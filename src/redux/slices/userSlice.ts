import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IServiceRedux } from "../../ts/interfaces/types";

interface UserSlice {
  webp: boolean;
  services: IServiceRedux[];
  projectsId: string[];
}

const initialState: UserSlice = {
  webp: false,
  services: [],
  projectsId: []
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setWebp: (state, action: PayloadAction<boolean>) => {
      state.webp = action.payload;
    },
    setServices: (state, action: PayloadAction<IServiceRedux[]>) => {
      state.services = action.payload;
    },
    setProjectsId: (state, action: PayloadAction<string[]>) => {
      state.projectsId = action.payload;
    }
  }
});

export const {
  setWebp, setServices, setProjectsId
} = userSlice.actions;

export default userSlice.reducer;
