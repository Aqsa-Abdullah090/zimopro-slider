import { reelsDataType } from "@/lib/definations";
import { zpBackend } from "@/lib/service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchReels = createAsyncThunk("get/reels", async (ip) => {
  try {
    const { data } = await zpBackend.get(
      `/api/get-listings-reels?category_slug=real-estate&ip_address=${ip}`
    );
    return data.listingReels;
  } catch (e) {
    console.error(e);
  }
});

export interface reelsState {
  backgroundImage: number | null;
  data: reelsDataType[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: any;
}

const initialState: reelsState = {
  backgroundImage: null,
  data: [],
  status: "idle", //idle, success, error, loading
  error: null,
};

export const reelsSlice = createSlice({
  name: "reelsSlice",
  initialState,
  reducers: {
    reelsBackgroundReducer: (state, action) => {
      state.backgroundImage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReels.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchReels.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        // if (state.data.length > 0) {
        //   state.agent = state.data[0];
        // }
      })
      .addCase(fetchReels.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { reelsBackgroundReducer } = reelsSlice.actions;

export default reelsSlice.reducer;
