import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './Login/loginSlice';
import carDetailsReducer from './Car/carDetailsSlice';
import carSliceReducer from './Car/carSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    carData: carDetailsReducer,
    cars: carSliceReducer,
  },
});

export default store;
