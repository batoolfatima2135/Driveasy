import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './Login/loginSlice';
import carDetailsReducer from './Car/carDetailsSlice';
import carAddReducer from './Car/carAddSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    carData: carDetailsReducer,
    addCar: carAddReducer,
  },
});

export default store;
