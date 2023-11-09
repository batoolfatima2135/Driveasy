import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const loginUrl = 'https://driveasy.onrender.com/users';

export const loginUser = createAsyncThunk('login/user', async (username) => {
  try {
    const response = await fetch(`${loginUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    });
    const data = await response.json();
    // store user details
    if (data.status === 'login') {
      localStorage.setItem('userId', data.user_id);
      localStorage.setItem('username', username);
    }

    return data;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  loading: false,
  error: null,
  status: null,
  // get user details from local storage
  userId: localStorage.getItem('userId') || null,
  username: localStorage.getItem('username') || '',
};

const login = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = action.payload.status;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload.status;
        state.loading = false;
      });
  },
});

export default login.reducer;
