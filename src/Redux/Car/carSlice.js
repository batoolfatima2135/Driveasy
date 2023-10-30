import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCars = createAsyncThunk('car/all', async () => {
  console.log('fetchCars');
  try {
    const response = await fetch('http://localhost:3000/cars', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const carList = await response.json();
    return carList;
  } catch (error) {
    return error.message;
  }
});

const carSlice = createSlice({
  name: 'car',
  initialState: {
    loading: false,
    error: null,
    cars: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.cars = action.payload;
        state.loading = false;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.error = action.payload.message;
        state.loading = false;
      });
  },
});

export default carSlice.reducer;
