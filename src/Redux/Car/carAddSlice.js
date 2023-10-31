import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const addCar = createAsyncThunk('car/add', async (formData) => {
  const data = new FormData();

  data.append('car[name]', formData.name);
  data.append('car[price]', formData.price);
  data.append('car[color]', formData.color);
  data.append('car[model]', formData.model);
  data.append('car[image]', formData.image);
  try {
    const response = await fetch('http://localhost:3000/cars', {
      method: 'POST',
      body: data,
    });

    if (response.ok) {
      const status = await response.json();
      return status;
    }
    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  loading: false,
  error: null,
  message: null,
};

const CarAdd = createSlice({
  name: 'addCar',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCar.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCar.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.loading = false;
      })
      .addCase(addCar.rejected, (state, action) => {
        state.error = action.payload.message;
        state.loading = false;
      });
  },
});

export default CarAdd.reducer;
