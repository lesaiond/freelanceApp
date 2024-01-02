import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './slices/useSlice';
import authReducer from './slices/authSlice';

const rootReducer = combineReducers({
  user: userReducer,  
  auth: authReducer,
  // другие редюсеры
});

export default rootReducer;
