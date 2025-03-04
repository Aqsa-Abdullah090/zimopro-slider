import { NAV_BEHEIVIOURS } from "@/lib/constants";
import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  navbarColor: NAV_BEHEIVIOURS.transparentBg,
  isFixedVisible: false,
  scrollDirection: "down",
};

export const navbarSlice = createSlice({
  name: "navbarSlice",
  initialState,
  reducers: {
    navbarColorReducer: (state, action) => {
      state.navbarColor = action.payload;
    },
    isFixedVisibleReducer: (state, action) => {
      if (action.payload !== state.isFixedVisible) {
        state.isFixedVisible = action.payload;
      }
    },
    scrollDirectionReducer: (state, action) => {
      if (action.payload !== state.scrollDirection) {
        state.scrollDirection = action.payload;
      }
    },
  },
});

export const {
  navbarColorReducer,
  isFixedVisibleReducer,
  scrollDirectionReducer,
} = navbarSlice.actions;

export default navbarSlice.reducer;
