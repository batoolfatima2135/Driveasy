import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './Login/loginSlice';
import carSliceReducer from './Car/carSlice';
import reservationSliceReducer from './Reservation/reservationSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    cars: carSliceReducer,
    reservations: reservationSliceReducer,
  },
});
export default store;
