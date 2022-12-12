import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const getUsers = createAsyncThunk(
    "user/getUsers",  
    async () => {
            const response = await axios.get("https://dummyjson.com/users");
            return response.data;
        }
  );
const UserSlice = createSlice({
    name: 'user',
    initialState: {
        user:[],
        loading:'idle',
        error:null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state, action) => {
          if (state.loading === "idle") {
            state.loading = "pending";
          }
        });
        builder.addCase(getUsers.fulfilled, (state, action) => {
          if (state.loading === "pending") {
            state.user = action.payload;
            state.loading = "idle";
          }
        });
        builder.addCase(getUsers.rejected, (state, action) => {
          if (state.loading === "pending") {
            state.loading = "idle";
            state.error = "Error occured";
          }
        });
      },
        
})
export default UserSlice.reducer;
