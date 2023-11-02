import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addReservation = createAsyncThunk(
  'reservation/add',
  async (formData) => {
    const data = new FormData();

    data.append('reservation[city]', formData.city);
    data.append('reservation[date]', formData.date);
    data.append('reservation[user_id]', formData.user_id);
    data.append('reservation[car_id]', formData.car_id);
    try {
      const response = await fetch('http://localhost:3000/reservations', {
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
  },
);

const initialState = {
  loading: false,
  error: null,
  message: null,
  status: null,
};

const ReservationAdd = createSlice({
  name: 'addReservation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addReservation.pending, (state) => {
        state.loading = true;
      })
      .addCase(addReservation.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.status = action.payload.status;
        state.loading = false;
      })
      .addCase(addReservation.rejected, (state, action) => {
        state.error = action.payload.error;
        state.loading = false;
      });
  },
});

export default ReservationAdd.reducer;
