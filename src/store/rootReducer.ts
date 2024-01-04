import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/useSlice";
import authReducer from "./slices/authSlice";
import jobsSlice from "./slices/jobsSlice";

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  jobs: jobsSlice,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
