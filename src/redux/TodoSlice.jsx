import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const getTodo = createAsyncThunk(
    "todo/getTodo",  
    async () => {
            const response = await axios.get("https://dummyjson.com/todos");
            return response.data;
        }
  );
const TodoSlice = createSlice({
    name: 'todo',
    initialState: {
        todo:[],
        loading:'idle',
        error:null,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getTodo.pending, (state, action) => {
          if (state.loading === "idle") {
            state.loading = "pending";
          }
        });
        builder.addCase(getTodo.fulfilled, (state, action) => {
          if (state.loading === "pending") {
            state.todo = action.payload;
            state.loading = "idle";
          }
        });
        builder.addCase(getTodo.rejected, (state, action) => {
          if (state.loading === "pending") {
            state.loading = "idle";
            state.error = "Error occured";
          }
        });
      },
        
})
export default TodoSlice.reducer;
