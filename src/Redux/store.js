import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './Login/loginSlice';
import carDetailsReducer from './Car/carDetailsSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    carData: carDetailsReducer,
  },
});

export default store;
