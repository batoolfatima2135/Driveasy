import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './Login/loginSlice';
import carDetailsReducer from './Car/carDetailsSlice';
import carSliceReducer from './Car/carSlice';
import carAddReducer from './Car/carAddSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    carData: carDetailsReducer,
    cars: carSliceReducer,
    addCar: carAddReducer,
  },
});

export default store;
