import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  FixedSideMenu: false,
  sideMenuOpenState: false,
  FixedOpenedSideMenu: false,
  linksVisible: true,
};

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {
    FixedSideMenuReducer: (state, action) => {
      state.FixedSideMenu = action.payload;
    },
    sideMenuOpen: (state, action) => {
      state.sideMenuOpenState = action.payload;
    },
    FixedOpenedSideMenuReducer: (state, action) => {
      state.FixedOpenedSideMenu = action.payload;
    },
    LinksVisibleReducer: (state, action) => {
      state.linksVisible = action.payload;
    },
  },
});

export const {
  FixedSideMenuReducer,
  sideMenuOpen,
  FixedOpenedSideMenuReducer,
  LinksVisibleReducer,
} = sideMenuSlice.actions;

export default sideMenuSlice.reducer;
