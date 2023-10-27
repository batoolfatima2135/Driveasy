import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCarDetails = createAsyncThunk('car/details', async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/cars/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const carData = await response.json();
    return carData;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  loading: false,
  error: null,
  carDetails: null,
};

const Car = createSlice({
  name: 'Car',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCarDetails.fulfilled, (state, action) => {
        state.carDetails = action.payload;
        state.loading = false;
      })
      .addCase(fetchCarDetails.rejected, (state, action) => {
        state.error = action.payload.message;
        state.loading = false;
      });
  },
});

export default Car.reducer;
