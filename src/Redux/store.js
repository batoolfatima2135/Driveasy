import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './Login/loginSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;
