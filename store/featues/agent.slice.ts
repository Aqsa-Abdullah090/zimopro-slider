import { HOLDING_TABS } from "@/components/holding/lib";
import { AgentTypes } from "@/lib/definations";
import { getAgentsData } from "@/lib/helpers";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const fetchAgents = createAsyncThunk("get/agents", async () => {
  try {
    const agentsData = await getAgentsData();
    return agentsData;
  } catch (e) {
    console.error(e);
  }
});

export interface agentState {
  data: AgentTypes[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: any;
  agent: AgentTypes | {};
}

const initialState: agentState = {
  data: [],
  status: "idle", //idle, success, error, loading
  error: null,
  agent: {},
};

export const agentSlice = createSlice({
  name: "agentSlice",
  initialState,
  reducers: {
    // just provide tab, in payload
    currentAgent: (state, action: PayloadAction<AgentTypes>) => {
      state.agent = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAgents.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAgents.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload || [];
        if (state.data.length > 0) {
          state.agent = state.data[0];
        }
      })
      .addCase(fetchAgents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { currentAgent } = agentSlice.actions;

export default agentSlice.reducer;
