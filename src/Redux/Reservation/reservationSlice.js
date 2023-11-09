import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import baseUrl from '../../api/api';

const userID = localStorage.getItem('userId');
const intUserID = parseInt(userID, 10);

export const cancelReservation = createAsyncThunk(
  'reservation/cancel',
  async (id) => {
    try {
      const response = await fetch(`${baseUrl}/reservations/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const reservationList = await response.json();
      return reservationList;
    } catch (error) {
      return error.message;
    }
  },
);
export const addReservation = createAsyncThunk(
  'reservation/add',
  async (formData) => {
    const data = new FormData();

    data.append('reservation[city]', formData.city);
    data.append('reservation[date]', formData.date);
    data.append('reservation[user_id]', formData.user_id);
    data.append('reservation[car_id]', formData.car_id);
    try {
      const response = await fetch(`${baseUrl}/reservations`, {
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
export const fetchReservations = createAsyncThunk(
  'reservation/all',
  async () => {
    try {
      const response = await fetch(
        `${baseUrl}/reservations?user_id=${intUserID}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const reservationList = await response.json();
      return reservationList;
    } catch (error) {
      return error.message;
    }
  },
);

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    loading: false,
    status: null,
    message: null,
    error: null,
    reservations: [],
  },
  reducers: {
    resetState: (state) => {
      state.status = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.reservations = action.payload;
        state.loading = false;
      })
      .addCase(fetchReservations.rejected, (state, action) => {
        state.error = action.payload.message;
        state.loading = false;
      })
      .addCase(cancelReservation.pending, (state) => {
        state.loading = true;
      })
      .addCase(cancelReservation.fulfilled, (state, action) => {
        state.loading = false;
        state.status = action.payload.status;
        state.reservations = state.reservations.filter(
          (i) => i.id !== action.payload.reserve.id,
        );
      })
      .addCase(cancelReservation.rejected, (state, action) => {
        state.error = action.payload.message;
        state.loading = false;
      })
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
export const { resetState } = reservationSlice.actions;
export default reservationSlice.reducer;
