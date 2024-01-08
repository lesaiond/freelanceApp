import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/useSlice";
import authReducer from "./slices/authSlice";
import jobsSlice from "./slices/jobsSlice";
import jobsIdSlice from "./slices/jobsIdSlice";
import companiesReducer from "./slices/companieSlice";

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  jobs: jobsSlice,
  jobsId: jobsIdSlice,
  companies: companiesReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
