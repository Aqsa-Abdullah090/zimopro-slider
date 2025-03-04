import { configureStore } from "@reduxjs/toolkit";
import holdingSlice from "./featues/holding.slice";
import visitorSlice from "./featues/visitor.slice";
import agentSlice from "./featues/agent.slice";
import navbarSlice from "./featues/navbar.slice";
import sideMenuSlice from "./featues/side-menu.slice";
import reelsSlice from "./featues/reels.slice";

export const store = configureStore({
  reducer: {
    holding: holdingSlice,
    visitor: visitorSlice,
    agent: agentSlice,
    navbar: navbarSlice,
    sideMenu: sideMenuSlice,
    reels: reelsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
