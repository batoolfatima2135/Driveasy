import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const userID = localStorage.getItem('userId');
const intUserID = parseInt(userID, 10);

export const fetchReservations = createAsyncThunk(
  'reservation/all',
  async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/reservations?user_id=${intUserID}`,
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
    error: null,
    reservations: [],
  },
  reducers: {},
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
      });
  },
});

export default reservationSlice.reducer;
