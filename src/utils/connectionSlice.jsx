import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connections",
  initialState: [] , // ⭐ always an array

  reducers: {
    addConnections: (state, action) => {
       return Array.isArray(action.payload) ? action.payload : [];

    },
    removeConnections: () => {
      return null;
    },
  },
});

export const {
 
  addConnections,
  removeConnections
} = connectionSlice.actions;

export default connectionSlice.reducer;
