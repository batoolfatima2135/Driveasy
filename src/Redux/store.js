import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './Login/loginSlice';
import carReducer from './Car/carSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    car: carReducer,
  },
});

export default store;
