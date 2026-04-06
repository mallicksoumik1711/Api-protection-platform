import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProjectId: localStorage.getItem("projectId") || null,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProject: (state, action) => {
      state.selectedProjectId = action.payload;
      localStorage.setItem("projectId", action.payload);
    },
    clearProject: (state) => {
      ((state.selectedProjectId = null), localStorage.removeItem("projectId"));
    },
  },
});

export const { setProject, clearProject } = projectSlice.actions;
export default projectSlice.reducer;
