import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: undefined,
  isloading: false,
};
export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const response = await fetch("https://dummyjson.com/users", {
        method: "POST",
        body: JSON.stringify(userData),
        user: userData,
      });
      return response.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(err.response.data.errors);
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const response = await fetch("https://dummyjson.com/users/login", {
        method: "POST",
        body: JSON.stringify(userData),
        user: userData,
      });
      return response.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(err.response.data.errors);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isloading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isloading = false;
        state.currentUser = [...state.currentUser, action.payload];
      })
      .addCase(register.rejected, (state) => {
        state.isloading = false;
      })
      .addCase(login.pending, (state) => {
        state.isloading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isloading = false;
        state.currentUser = [...state.currentUser, action.payload];
      })
      .addCase(login.rejected, (state) => {
        state.isloading = false;
      });
  },
});

export default authSlice.reducer;
