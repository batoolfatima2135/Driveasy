import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCars = createAsyncThunk('car/all', async () => {
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

const carSlice = createSlice({
  name: 'car',
  initialState: {
    loading: false,
    error: null,
    cars: [],
    message: null,
    carDetails: null,
  },
  reducers: {
    resetState: (state) => {
      state.message = null;
    },
  },
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
      })
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
      })
      .addCase(addCar.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCar.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.cars.unshift(action.payload.car);
        state.loading = false;
      })
      .addCase(addCar.rejected, (state, action) => {
        state.error = action.payload.message;
        state.loading = false;
      });
  },
});
export const { resetState } = carSlice.actions;
export default carSlice.reducer;
