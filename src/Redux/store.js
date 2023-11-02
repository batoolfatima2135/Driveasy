import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './Login/loginSlice';
import carDetailsReducer from './Car/carDetailsSlice';
import carSliceReducer from './Car/carSlice';
import carAddReducer from './Car/carAddSlice';
import reservationAddReducer from './Reservation/reservationSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    carData: carDetailsReducer,
    cars: carSliceReducer,
    addCar: carAddReducer,
    addReservation: reservationAddReducer,
  },
});

export default store;
